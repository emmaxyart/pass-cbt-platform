import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import * as aloc from '@/lib/aloc-api';

/**
 * Auth helper — returns the authenticated premium user or a 401/403 response.
 * This is the single security gate for ALL question data. Client-side premium
 * checks are UX only; this function is the real enforcement layer.
 */
async function requirePremiumUser(): Promise<
    { user: { id: string }; error: null } | { user: null; error: NextResponse }
> {
    const supabase = await createClient();

    // 1. Verify the session server-side (reads HttpOnly cookie — cannot be forged)
    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
        return {
            user: null,
            error: NextResponse.json(
                { error: 'Authentication required. Please sign in.' },
                { status: 401 }
            ),
        };
    }

    // 2. Check premium status in the database (authoritative source)
    const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('is_premium')
        .eq('id', user.id)
        .single();

    if (profileError) {
        console.error('Profile fetch error:', profileError.message);
        return {
            user: null,
            error: NextResponse.json(
                { error: 'Could not verify your subscription status.' },
                { status: 500 }
            ),
        };
    }

    // Fall back to user_metadata only as secondary check if DB field is missing
    const isPremium = profile?.is_premium ?? user.user_metadata?.is_premium ?? false;

    if (!isPremium) {
        return {
            user: null,
            error: NextResponse.json(
                { error: 'Premium subscription required to access past questions.' },
                { status: 403 }
            ),
        };
    }

    return { user, error: null };
}

export async function GET(request: NextRequest) {
    // ── Security gate ─────────────────────────────────────────────────────────
    const auth = await requirePremiumUser();
    if (auth.error) return auth.error;
    // ─────────────────────────────────────────────────────────────────────────

    const searchParams = request.nextUrl.searchParams;
    const subject = searchParams.get('subject');
    const year = searchParams.get('year');
    const count = searchParams.get('count');
    const type = searchParams.get('type');
    const vendor = searchParams.get('vendor');
    const action = searchParams.get('action'); // 'stats', 'years', 'list-subjects', 'subjects'
    const id = searchParams.get('id');

    try {
        // ── Metadata / Metrics ────────────────────────────────────────────────
        if (action === 'years' && subject) {
            const years = await aloc.getYearsForSubject(subject);
            return NextResponse.json(years);
        }
        if (action === 'list-subjects') {
            const subjects = await aloc.getAllSubjects();
            return NextResponse.json(subjects);
        }
        if (action === 'subjects' && year) {
            const subjects = await aloc.getSubjectsForYear(year);
            return NextResponse.json(subjects);
        }
        if (action === 'stats' && subject) {
            const stats = await aloc.getSubjectStats(subject);
            return NextResponse.json(stats);
        }

        // ── Question by ID ────────────────────────────────────────────────────
        if (id) {
            const question = await aloc.getQuestionById(id);
            return NextResponse.json(question);
        }

        // ── Vendor questions ──────────────────────────────────────────────────
        if (vendor) {
            const questions = await aloc.getQuestionsByVendor(vendor);
            return NextResponse.json(questions);
        }

        // ── Batch questions ───────────────────────────────────────────────────
        if (subject) {
            const numCount = count ? parseInt(count) : 40; // max 40 per ALOC call

            if (numCount > 40) {
                const questions = await aloc.getHugeQuestions(subject, Math.min(numCount, 120));
                return NextResponse.json(questions);
            }
            if (year && type) {
                const question = await aloc.getQuestionByExamAndYear(subject, type, year);
                return NextResponse.json([question]);
            }
            if (year) {
                const questions = await aloc.getSeveralQuestionsByYear(subject, year, numCount);
                return NextResponse.json(questions);
            }

            const questions = await aloc.getSeveralQuestions(subject, numCount);
            return NextResponse.json(questions);
        }

        return NextResponse.json({ error: 'Missing required parameters' }, { status: 400 });

    } catch (error: any) {
        console.error('ALOC API Route Error:', error);
        return NextResponse.json(
            {
                error: error.message || 'Failed to fetch from ALOC',
                details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
            },
            { status: 500 }
        );
    }
}

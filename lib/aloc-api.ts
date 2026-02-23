import { Question } from '@/types';

const ALOC_BASE_URL = 'https://questions.aloc.com.ng/api/v2';
const ALOC_METRICS_URL = 'https://questions.aloc.com.ng/api/metrics';

export interface AlocQuestion {
    id: number;
    question: string;
    option: {
        a: string;
        b: string;
        c: string;
        d: string;
        e?: string;
    };
    answer: string;
    solution: string;
    examtype: string;
    examyear: string;
    image?: string;
}

export interface AlocResponse {
    status: number;
    message?: string;
    data: AlocQuestion[] | AlocQuestion | any;
}

export interface YearWithCount {
    examyear: string;
    questions: number;
}

export interface SubjectStats {
    subject: string;
    questions: number;
}

// Subject name mapping: display name → ALOC API slug
export const SUBJECT_MAP: Record<string, string> = {
    english: 'english',
    mathematics: 'mathematics',
    physics: 'physics',
    chemistry: 'chemistry',
    biology: 'biology',
    economics: 'economics',
    government: 'government',
    literature: 'englishlit',
    commerce: 'commerce',
    accounting: 'accounting',
    geography: 'geography',
    crk: 'crk',
    irk: 'irk',
    civic: 'civiledu',
    history: 'history',
    'current affairs': 'currentaffairs',
    insurance: 'insurance',
};

export function getAlocSubjectSlug(displayName: string): string {
    return SUBJECT_MAP[displayName.toLowerCase()] || displayName.toLowerCase();
}

export function mapAlocToQuestion(alocQ: AlocQuestion, subject?: string): Question {
    return {
        id: `aloc-${alocQ.id}`,
        subject: subject || alocQ.examtype || 'General',
        year: parseInt(alocQ.examyear) || 0,
        question: alocQ.question,
        options: {
            a: alocQ.option.a,
            b: alocQ.option.b,
            c: alocQ.option.c,
            d: alocQ.option.d,
        },
        correct_option: alocQ.answer.toLowerCase() as 'a' | 'b' | 'c' | 'd',
        explanation: alocQ.solution,
        image_url: alocQ.image || undefined,
        is_premium: true,
    };
}

async function alocFetch(endpoint: string): Promise<AlocResponse> {
    const accessToken = process.env.ALOC_ACCESS_TOKEN;
    if (!accessToken) {
        throw new Error('ALOC_ACCESS_TOKEN is not configured');
    }

    const url = `${ALOC_BASE_URL}/${endpoint}`;
    const response = await fetch(url, {
        headers: {
            'AccessToken': accessToken,
            'Accept': 'application/json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error(`ALOC API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

async function alocMetricsFetch(endpoint: string): Promise<any> {
    const accessToken = process.env.ALOC_ACCESS_TOKEN;
    if (!accessToken) {
        throw new Error('ALOC_ACCESS_TOKEN is not configured');
    }

    const url = `${ALOC_METRICS_URL}/${endpoint}`;
    const response = await fetch(url, {
        headers: {
            'AccessToken': accessToken,
            'Accept': 'application/json',
        },
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error(`ALOC Metrics API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
}

/**
 * CORE ENDPOINTS
 */

// 1. A question by subject
export async function getQuestionBySubject(subject: string): Promise<Question> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`q?subject=${slug}`);
    return mapAlocToQuestion(res.data as AlocQuestion, subject);
}

// 2. Vendor Questions (e.g., waec, jamb, post-utme)
export async function getQuestionsByVendor(vendor: string): Promise<Question[]> {
    const res = await alocFetch(`q?vendor=${vendor.toLowerCase()}`);
    const data = Array.isArray(res.data) ? res.data : [res.data];
    return data.map((q: AlocQuestion) => mapAlocToQuestion(q));
}

// 3. A question by year
export async function getQuestionByYear(subject: string, year: string): Promise<Question> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`q?subject=${slug}&year=${year}`);
    return mapAlocToQuestion(res.data as AlocQuestion, subject);
}

// 4. A question by exam type
export async function getQuestionByType(subject: string, type: string): Promise<Question> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`q?subject=${slug}&type=${type.toLowerCase()}`);
    return mapAlocToQuestion(res.data as AlocQuestion, subject);
}

// 5. A question by exam & year
export async function getQuestionByExamAndYear(subject: string, type: string, year: string): Promise<Question> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`q?subject=${slug}&type=${type.toLowerCase()}&year=${year}`);
    return mapAlocToQuestion(res.data as AlocQuestion, subject);
}

// 6. A question by Id
export async function getQuestionById(id: string): Promise<Question> {
    const res = await alocFetch(`q/${id}`);
    return mapAlocToQuestion(res.data as AlocQuestion);
}

// 7. Several questions (max 40)
export async function getSeveralQuestions(subject: string, count: number = 10): Promise<Question[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`q/${count}?subject=${slug}`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q, subject));
}

// 8. Several questions by year (max 40)
export async function getSeveralQuestionsByYear(subject: string, year: string, count: number = 40): Promise<Question[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`q/${count}?subject=${slug}&year=${year}`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q, subject));
}

// 9. Many questions (default 40)
export async function getManyQuestions(subject: string): Promise<Question[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`m?subject=${slug}`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q, subject));
}

// 10. Group of Subjects
export async function getQuestionsBySubjects(subjects: string[]): Promise<Question[]> {
    const slugs = subjects.map(s => getAlocSubjectSlug(s));
    const res = await alocFetch(`m?subjects=${slugs.join(',')}`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q));
}

/**
 * HUGE ENDPOINTS (Up to 120 questions)
 */

// 11. Huge questions with comprehension
export async function getHugeQuestionsWithComprehension(subject: string): Promise<Question[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`h?subject=${slug}&comprehension=true`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q, subject));
}

// 12. Huge ordered questions (max 120)
export async function getHugeOrderedQuestions(subject: string, count: number = 120): Promise<Question[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`h/${count}?subject=${slug}&order=asc`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q, subject));
}

// 13. Huge questions (max 120)
export async function getHugeQuestions(subject: string, count: number = 120): Promise<Question[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocFetch(`h/${count}?subject=${slug}`);
    return (res.data as AlocQuestion[]).map(q => mapAlocToQuestion(q, subject));
}

/**
 * METRICS ENDPOINTS (No AccessToken needed — public)
 */

// 14. Get all supported subjects (public)
export async function getAllSubjects(): Promise<string[]> {
    const res = await alocMetricsFetch('list-subjects');
    return Object.values(res.data) as string[];
}

// 15. Subjects available for a year (public)
export async function getSubjectsForYear(year: string): Promise<string[]> {
    const res = await alocMetricsFetch(`subjects-available-for/${year}`);
    return res.data;
}

// 16. Years available for a subject — with question counts (public)
export async function getYearsForSubject(subject: string): Promise<YearWithCount[]> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocMetricsFetch(`years-available-for/${slug}`);
    // Filter out invalid years (empty string or non-numeric) and sort descending
    const years: YearWithCount[] = (res.data as YearWithCount[])
        .filter(y => y.examyear && /^\d{4}$/.test(y.examyear))
        .sort((a, b) => parseInt(b.examyear) - parseInt(a.examyear));
    return years;
}

// 17. Total questions available for a subject (public)
export async function getSubjectStats(subject: string): Promise<SubjectStats> {
    const slug = getAlocSubjectSlug(subject);
    const res = await alocMetricsFetch(`questions-available-for/${slug}`);
    return res.data as SubjectStats;
}

// 18. Total API calls ever made (public)
export async function getTotalApiCalls(): Promise<any> {
    const res = await alocMetricsFetch('subjects-call');
    return res.data;
}

// Legacy compatibility function
export async function fetchAlocQuestions(subject: string, year?: string, count: number = 40): Promise<Question[]> {
    if (year) {
        return await getSeveralQuestionsByYear(subject, year, Math.min(count, 40));
    }
    if (count > 40) {
        return await getHugeQuestions(subject, Math.min(count, 120));
    }
    return await getSeveralQuestions(subject, count);
}

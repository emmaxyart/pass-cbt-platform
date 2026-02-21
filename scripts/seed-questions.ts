import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';
import 'dotenv/config'

// Load environment variables is handled by import 'dotenv/config' above

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Define the Question interface matching types/index.ts
interface Question {
    id: string;
    subject: string;
    year: number;
    question: string;
    options: {
        a: string;
        b: string;
        c: string;
        d: string;
    };
    correct_option: 'a' | 'b' | 'c' | 'd';
    explanation?: string;
    image_url?: string;
    is_premium: boolean;
}

// Mock questions from questions.ts (manually extracted here for the script)
const mockQuestions: Question[] = [
    {
        id: '1',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The manager’s <u>clandestine</u> activities were finally exposed.',
        options: { a: 'Open', b: 'Secret', c: 'Honest', d: 'Illegal' },
        correct_option: 'b',
        explanation: 'Clandestine means kept secret or done secretively, especially because illicit.',
        is_premium: false
    },
    {
        id: '2',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for x: 2x + 5 = 15',
        options: { a: '5', b: '10', c: '15', d: '20' },
        correct_option: 'a',
        explanation: '2x = 15 - 5 => 2x = 10 => x = 5',
        is_premium: false
    },
    {
        id: '3',
        subject: 'Physics',
        year: 2023,
        question: 'Which of the following is a fundamental unit?',
        options: { a: 'Newton', b: 'Joule', c: 'Kilogram', d: 'Watt' },
        correct_option: 'c',
        explanation: 'Kilogram is a fundamental unit of mass in the SI system.',
        is_premium: true
    }
    // Add more if needed, but this is enough to demonstrate
];

async function seedQuestions() {
    console.log('Seeding questions to Supabase...');

    for (const q of mockQuestions) {
        const { data, error } = await supabase
            .from('questions')
            .upsert({
                id: q.id,
                subject: q.subject,
                year: q.year,
                question: q.question,
                options: q.options,
                correct_option: q.correct_option,
                explanation: q.explanation,
                is_premium: q.is_premium,
                updated_at: new Date().toISOString()
            });

        if (error) {
            console.error(`Error inserting question ${q.id}:`, error.message);
        } else {
            console.log(`Successfully inserted question ${q.id}`);
        }
    }

    console.log('Finished seeding.');
}

seedQuestions();

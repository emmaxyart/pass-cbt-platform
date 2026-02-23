export interface Question {
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

export type Subject =
    | 'English'
    | 'Mathematics'
    | 'Physics'
    | 'Chemistry'
    | 'Biology'
    | 'Economics'
    | 'Government'
    | 'CRK'
    | 'IRK'
    | 'Commerce'
    | 'Accounting'
    | 'Literature'
    | 'Geography'
    | 'Civic'
    | 'Insurance'
    | 'Current Affairs'
    | 'History';

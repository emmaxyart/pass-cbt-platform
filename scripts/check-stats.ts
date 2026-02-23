import { getSubjectStats } from './lib/aloc-api';
import dotenv from 'dotenv';
import path from 'path';

// Load .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const subjects = ['english', 'mathematics', 'physics', 'chemistry', 'biology'];

async function checkStats() {
    console.log('Fetching ALOC Subject Statistics...\n');
    for (const subject of subjects) {
        try {
            const stats = await getSubjectStats(subject);
            console.log(`Subject: ${subject.toUpperCase()}`);
            console.log(JSON.stringify(stats, null, 2));
            console.log('-------------------\n');
        } catch (error) {
            console.error(`Error fetching ${subject}:`, error.message);
        }
    }
}

checkStats();

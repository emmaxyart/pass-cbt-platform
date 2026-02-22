export interface SyllabusSubject {
    name: string
    slug: string
    icon: string
    color: string
}

export const syllabusSubjects: SyllabusSubject[] = [
    { name: 'Mathematics', slug: 'mathematics', icon: '🔢', color: 'bg-green-100 text-green-600' },
    { name: 'English Language', slug: 'english-language', icon: '📝', color: 'bg-blue-100 text-blue-600' },
    { name: 'Chemistry', slug: 'chemistry', icon: '🧪', color: 'bg-orange-100 text-orange-600' },
    { name: 'Physics', slug: 'physics', icon: '⚛️', color: 'bg-purple-100 text-purple-600' },
    { name: 'Biology', slug: 'biology', icon: '🧬', color: 'bg-red-100 text-red-600' },
    { name: 'Geography', slug: 'geography', icon: '🌍', color: 'bg-teal-100 text-teal-600' },
    { name: 'Literature in English', slug: 'literature-in-english', icon: '📚', color: 'bg-amber-100 text-amber-600' },
    { name: 'Economics', slug: 'economics', icon: '📊', color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Commerce', slug: 'commerce', icon: '🏪', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Accounts - Principles of Accounts', slug: 'principles-of-accounts', icon: '📒', color: 'bg-lime-100 text-lime-600' },
    { name: 'Government', slug: 'government', icon: '🏛️', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Christian Religious Knowledge (CRK)', slug: 'crk', icon: '📖', color: 'bg-pink-100 text-pink-600' },
    { name: 'Agricultural Science', slug: 'agricultural-science', icon: '🌾', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Islamic Religious Knowledge (IRK)', slug: 'irk', icon: '🕌', color: 'bg-sky-100 text-sky-600' },
    { name: 'History', slug: 'history', icon: '📜', color: 'bg-stone-100 text-stone-600' },
    { name: 'Fine Arts', slug: 'fine-arts', icon: '🎨', color: 'bg-fuchsia-100 text-fuchsia-600' },
    { name: 'Music', slug: 'music', icon: '🎵', color: 'bg-violet-100 text-violet-600' },
    { name: 'French', slug: 'french', icon: '🇫🇷', color: 'bg-blue-100 text-blue-600' },
    { name: 'Animal Husbandry', slug: 'animal-husbandry', icon: '🐄', color: 'bg-amber-100 text-amber-600' },
    { name: 'Insurance', slug: 'insurance', icon: '🛡️', color: 'bg-slate-100 text-slate-600' },
    { name: 'Civic Education', slug: 'civic-education', icon: '🏳️', color: 'bg-rose-100 text-rose-600' },
    { name: 'Further Mathematics', slug: 'further-mathematics', icon: '📐', color: 'bg-green-100 text-green-600' },
    { name: 'Yoruba', slug: 'yoruba', icon: '🗣️', color: 'bg-yellow-100 text-yellow-600' },
    { name: 'Igbo', slug: 'igbo', icon: '🗣️', color: 'bg-emerald-100 text-emerald-600' },
    { name: 'Arabic', slug: 'arabic', icon: '🕋', color: 'bg-teal-100 text-teal-600' },
    { name: 'Home Economics', slug: 'home-economics', icon: '🏠', color: 'bg-pink-100 text-pink-600' },
    { name: 'Hausa', slug: 'hausa', icon: '🗣️', color: 'bg-orange-100 text-orange-600' },
    { name: 'Book Keeping', slug: 'book-keeping', icon: '📕', color: 'bg-red-100 text-red-600' },
    { name: 'Data Processing', slug: 'data-processing', icon: '💻', color: 'bg-indigo-100 text-indigo-600' },
    { name: 'Catering Craft Practice', slug: 'catering-craft-practice', icon: '🍽️', color: 'bg-amber-100 text-amber-600' },
    { name: 'Computer Studies', slug: 'computer-studies', icon: '🖥️', color: 'bg-cyan-100 text-cyan-600' },
    { name: 'Marketing', slug: 'marketing', icon: '📈', color: 'bg-purple-100 text-purple-600' },
    { name: 'Physical Education', slug: 'physical-education', icon: '🏃', color: 'bg-lime-100 text-lime-600' },
    { name: 'Office Practice', slug: 'office-practice', icon: '🗄️', color: 'bg-stone-100 text-stone-600' },
    { name: 'Technical Drawing', slug: 'technical-drawing', icon: '📏', color: 'bg-sky-100 text-sky-600' },
    { name: 'Food and Nutrition', slug: 'food-and-nutrition', icon: '🥗', color: 'bg-green-100 text-green-600' },
    { name: 'Home Management', slug: 'home-management', icon: '🏡', color: 'bg-rose-100 text-rose-600' },
]

export function getSubjectBySlug(slug: string): SyllabusSubject | undefined {
    return syllabusSubjects.find(s => s.slug === slug)
}

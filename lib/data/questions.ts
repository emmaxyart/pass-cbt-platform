import { Question } from '@/types'

export const mockQuestions: Question[] = [
    // --- English Questions (20 Total) ---
    {
        id: 'eng-1',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The manager’s <u>clandestine</u> activities were finally exposed.',
        options: { a: 'Open', b: 'Secret', c: 'Honest', d: 'Illegal' },
        correct_option: 'b',
        explanation: 'Clandestine means kept secret or done secretively, especially because illicit.',
        is_premium: false
    },
    {
        id: 'eng-2',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The student was <u>penultimate</u> in the race.',
        options: { a: 'First', b: 'Last', c: 'Second to last', d: 'Third' },
        correct_option: 'c',
        explanation: 'Penultimate means second to last in a series.',
        is_premium: false
    },
    {
        id: 'eng-3',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: His explanation was <u>concise</u>.',
        options: { a: 'Brief', b: 'Verbose', c: 'Clear', d: 'Short' },
        correct_option: 'b',
        explanation: 'Concise means giving a lot of information clearly and in a few words; verbose is the opposite.',
        is_premium: false
    },
    {
        id: 'eng-4',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that best explains the underlined expression: He could not <u>make out</u> what the teacher was saying.',
        options: { a: 'Write', b: 'Hear', c: 'Understand', d: 'Ignore' },
        correct_option: 'c',
        explanation: 'To make out something means to manage with some difficulty to see, hear, or understand something.',
        is_premium: false
    },
    {
        id: 'eng-5',
        subject: 'English',
        year: 2023,
        question: 'Complete the sentence with the most appropriate option: She had <u>hardly</u> entered the room ___ the light went out.',
        options: { a: 'than', b: 'when', c: 'then', d: 'but' },
        correct_option: 'b',
        explanation: '"Hardly" is typically followed by "when" in this context.',
        is_premium: false
    },
    {
        id: 'eng-6',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: The <u>scarcity</u> of fuel led to high transport fares.',
        options: { a: 'Lack', b: 'Shortage', c: 'Abundance', d: 'Poverty' },
        correct_option: 'c',
        explanation: 'Scarcity means being in short supply; abundance is the opposite.',
        is_premium: false
    },
    {
        id: 'eng-7',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The team was <u>ecstatic</u> after the victory.',
        options: { a: 'Sad', b: 'Confused', c: 'Joyful', d: 'Anxious' },
        correct_option: 'c',
        explanation: 'Ecstatic means feeling or expressing overwhelming happiness or joyful excitement.',
        is_premium: false
    },
    {
        id: 'eng-8',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: The judge\'s decision was <u>impartial</u>.',
        options: { a: 'Fair', b: 'Neutral', c: 'Biased', d: 'Just' },
        correct_option: 'c',
        explanation: 'Impartial means treating all rivals or disputants equally; biased is the opposite.',
        is_premium: false
    },
    {
        id: 'eng-9',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that best explains the underlined expression: The student decided to <u>burn the midnight oil</u> to pass the exam.',
        options: { a: 'Light a lamp', b: 'Study late at night', c: 'Sleep early', d: 'Waste fuel' },
        correct_option: 'b',
        explanation: 'To burn the midnight oil means to read or work late into the night.',
        is_premium: false
    },
    {
        id: 'eng-10',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The constant <u>fluctuation</u> in prices is alarming.',
        options: { a: 'Stability', b: 'Increase', c: 'Variation', d: 'Decrease' },
        correct_option: 'c',
        explanation: 'Fluctuation refers to an irregular rising and falling in number or amount; variation is a near synonym.',
        is_premium: false
    },
    {
        id: 'eng-11',
        subject: 'English',
        year: 2023,
        question: 'Complete the sentence with the most appropriate option: Neither the teacher nor the students ___ present.',
        options: { a: 'is', b: 'are', c: 'were', d: 'was' },
        correct_option: 'c',
        explanation: 'When "neither...nor" connects subjects, the verb should agree with the nearer subject (students), which is plural.',
        is_premium: false
    },
    {
        id: 'eng-12',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The <u>enigmatic</u> message left everyone puzzled.',
        options: { a: 'Clear', b: 'Mysterious', c: 'Simple', d: 'Funny' },
        correct_option: 'b',
        explanation: 'Enigmatic means difficult to interpret or understand; mysterious.',
        is_premium: false
    },
    {
        id: 'eng-13',
        subject: 'English',
        year: 2023,
        question: 'Complete the sentence: If I ___ the results earlier, I would have told you.',
        options: { a: 'had known', b: 'know', c: 'knew', d: 'have known' },
        correct_option: 'a',
        explanation: 'This is a third conditional sentence, requiring "had known" in the if-clause.',
        is_premium: false
    },
    {
        id: 'eng-14',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: Her response was <u>spontaneous</u>.',
        options: { a: 'Natural', b: 'Planned', c: 'Quick', d: 'Free' },
        correct_option: 'b',
        explanation: 'Spontaneous means performed or occurring as a result of a sudden impulse; planned is the opposite.',
        is_premium: false
    },
    {
        id: 'eng-15',
        subject: 'English',
        year: 2023,
        question: 'Choose the most appropriate option: The boy is too young to <u>fend</u> ___ himself.',
        options: { a: 'to', b: 'for', c: 'at', d: 'by' },
        correct_option: 'b',
        explanation: 'To "fend for oneself" is the correct idiomatic expression.',
        is_premium: false
    },
    {
        id: 'eng-16',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The story was <u>alluring</u>.',
        options: { a: 'Boring', b: 'Repulsive', c: 'Attractive', d: 'Long' },
        correct_option: 'c',
        explanation: 'Alluring means powerfully and mysteriously attractive or fascinating; seductive.',
        is_premium: false
    },
    {
        id: 'eng-17',
        subject: 'English',
        year: 2023,
        question: 'Choose the opposite of <u>Obstinate</u>.',
        options: { a: 'Stubborn', b: 'Yielding', c: 'Firm', d: 'Stingy' },
        correct_option: 'b',
        explanation: 'Obstinate means stubbornly refusing to change one\'s opinion; yielding is the opposite.',
        is_premium: false
    },
    {
        id: 'eng-18',
        subject: 'English',
        year: 2023,
        question: 'Find the correctly spelt word.',
        options: { a: 'Accomodation', b: 'Accommodation', c: 'Acomodation', d: 'Acommodation' },
        correct_option: 'b',
        explanation: 'Accommodation is the correct spelling, with double "c" and double "m".',
        is_premium: false
    },
    {
        id: 'eng-19',
        subject: 'English',
        year: 2023,
        question: 'Complete the sentence: Every one of the candidates ___ been interviewed.',
        options: { a: 'has', b: 'have', c: 'were', d: 'are' },
        correct_option: 'a',
        explanation: '"Every one" is a singular subject, so it takes the singular verb "has".',
        is_premium: false
    },
    {
        id: 'eng-20',
        subject: 'English',
        year: 2023,
        question: 'Choose the nearest meaning to: <u>Abate</u>.',
        options: { a: 'Increase', b: 'Subside', c: 'Establish', d: 'Aggravate' },
        correct_option: 'b',
        explanation: 'Abate means to become less intense or widespread.',
        is_premium: false
    },

    // --- Mathematics Questions (20 Total) ---
    {
        id: 'math-1',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for x: 2x + 5 = 15',
        options: { a: '5', b: '10', c: '15', d: '20' },
        correct_option: 'a',
        explanation: '2x = 15 - 5 => 2x = 10 => x = 5',
        is_premium: false
    },
    {
        id: 'math-2',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the value of x if log10(x) = 2.',
        options: { a: '10', b: '20', c: '100', d: '200' },
        correct_option: 'c',
        explanation: 'log10(x) = 2 means x = 10^2 = 100.',
        is_premium: false
    },
    {
        id: 'math-3',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for y: 3y - 4 = 11.',
        options: { a: '3', b: '4', c: '5', d: '6' },
        correct_option: 'c',
        explanation: '3y = 11 + 4 => 3y = 15 => y = 5.',
        is_premium: false
    },
    {
        id: 'math-4',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the area of a rectangle with length 10cm and width 5cm.',
        options: { a: '15cm²', b: '25cm²', c: '50cm²', d: '100cm²' },
        correct_option: 'c',
        explanation: 'Area = length × width = 10 × 5 = 50.',
        is_premium: false
    },
    {
        id: 'math-5',
        subject: 'Mathematics',
        year: 2023,
        question: 'If a bag contains 3 red balls and 5 blue balls, what is the probability of picking a red ball at random?',
        options: { a: '3/5', b: '3/8', c: '5/8', d: '1/3' },
        correct_option: 'b',
        explanation: 'Total balls = 3 + 5 = 8. Probability = favorable outcomes / total outcomes = 3/8.',
        is_premium: false
    },
    {
        id: 'math-6',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for x: x² - 5x + 6 = 0.',
        options: { a: '2, 3', b: '-2, -3', c: '1, 6', d: '-1, -6' },
        correct_option: 'a',
        explanation: '(x - 2)(x - 3) = 0 => x = 2 or x = 3.',
        is_premium: false
    },
    {
        id: 'math-7',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the 10th term of the Arithmetic Progression (A.P): 2, 5, 8...',
        options: { a: '27', b: '29', c: '31', d: '33' },
        correct_option: 'b',
        explanation: 'a = 2, d = 3. 10th term = a + (n-1)d = 2 + 9(3) = 29.',
        is_premium: false
    },
    {
        id: 'math-8',
        subject: 'Mathematics',
        year: 2023,
        question: 'Calculate the simple interest on N2000 for 2 years at 5% per annum.',
        options: { a: 'N100', b: 'N200', c: 'N300', d: 'N400' },
        correct_option: 'b',
        explanation: 'I = PRT/100 = (2000 × 5 × 2)/100 = 200.',
        is_premium: false
    },
    {
        id: 'math-9',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the median of the numbers: 2, 5, 3, 8, 1.',
        options: { a: '2', b: '3', c: '5', d: '8' },
        correct_option: 'b',
        explanation: 'Ordered list: 1, 2, 3, 5, 8. The middle number is 3.',
        is_premium: false
    },
    {
        id: 'math-10',
        subject: 'Mathematics',
        year: 2023,
        question: 'Simplify: (x³ × x²) / x⁴.',
        options: { a: 'x', b: 'x²', c: 'x⁵', d: '1' },
        correct_option: 'a',
        explanation: '(x³ × x²) = x⁵. x⁵ / x⁴ = x.',
        is_premium: false
    },
    {
        id: 'math-11',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the value of sin 30°.',
        options: { a: '0', b: '0.5', c: '0.707', d: '1' },
        correct_option: 'b',
        explanation: 'sin 30° is a standard trigonometric value equal to 0.5.',
        is_premium: false
    },
    {
        id: 'math-12',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for x: 3(x - 2) = 12',
        options: { a: '2', b: '4', c: '6', d: '8' },
        correct_option: 'c',
        explanation: '3x - 6 = 12 => 3x = 18 => x = 6.',
        is_premium: false
    },
    {
        id: 'math-13',
        subject: 'Mathematics',
        year: 2023,
        question: 'Calculate the area of a circle with radius 7cm (Take π = 22/7).',
        options: { a: '44cm²', b: '77cm²', c: '154cm²', d: '308cm²' },
        correct_option: 'c',
        explanation: 'Area = πr² = (22/7) × 7 × 7 = 154.',
        is_premium: false
    },
    {
        id: 'math-14',
        subject: 'Mathematics',
        year: 2023,
        question: 'What is the sum of angles in a triangle?',
        options: { a: '90°', b: '180°', c: '270°', d: '360°' },
        correct_option: 'b',
        explanation: 'The interior angles of any triangle sum up to 180 degrees.',
        is_premium: false
    },
    {
        id: 'math-15',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the value of 5! (5 factorial).',
        options: { a: '15', b: '25', c: '120', d: '720' },
        correct_option: 'c',
        explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.',
        is_premium: false
    },
    {
        id: 'math-16',
        subject: 'Mathematics',
        year: 2023,
        question: 'If y is inversely proportional to x, and y=4 when x=2, find y when x=4.',
        options: { a: '2', b: '4', c: '8', d: '16' },
        correct_option: 'a',
        explanation: 'y = k/x => 4 = k/2 => k = 8. So y = 8/x. When x=4, y = 8/4 = 2.',
        is_premium: false
    },
    {
        id: 'math-17',
        subject: 'Mathematics',
        year: 2023,
        question: 'Simplify √72 in its simplest surd form.',
        options: { a: '2√6', b: '6√2', c: '3√8', d: '4√3' },
        correct_option: 'b',
        explanation: '√72 = √(36 × 2) = √36 × √2 = 6√2.',
        is_premium: false
    },
    {
        id: 'math-18',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the gradient of the line joining points (2, 3) and (4, 7).',
        options: { a: '1', b: '2', c: '3', d: '4' },
        correct_option: 'b',
        explanation: 'm = (y2 - y1) / (x2 - x1) = (7 - 3) / (4 - 2) = 4 / 2 = 2.',
        is_premium: false
    },
    {
        id: 'math-19',
        subject: 'Mathematics',
        year: 2023,
        question: 'Convert 120° to radians.',
        options: { a: 'π/3', b: '2π/3', c: '3π/2', d: 'π' },
        correct_option: 'b',
        explanation: 'Radians = Degrees × (π/180) = 120 × (π/180) = 2π/3.',
        is_premium: false
    },
    {
        id: 'math-20',
        subject: 'Mathematics',
        year: 2023,
        question: 'What is the sum of the first 5 prime numbers?',
        options: { a: '15', b: '18', c: '28', d: '30' },
        correct_option: 'c',
        explanation: 'Prime numbers are 2, 3, 5, 7, 11. Sum = 2+3+5+7+11 = 28.',
        is_premium: false
    },

    // --- Premium Mock Questions (Example) ---
    {
        id: 'phy-1',
        subject: 'Physics',
        year: 2023,
        question: 'Which of the following is a fundamental unit?',
        options: { a: 'Newton', b: 'Joule', c: 'Kilogram', d: 'Watt' },
        correct_option: 'c',
        explanation: 'Kilogram is a fundamental unit of mass in the SI system.',
        is_premium: true
    },
    {
        id: 'acc-1',
        subject: 'Accounting',
        year: 2023,
        question: 'Accounting equation is given by',
        options: {
            a: "Assets - Liabilities + Owner's Equity",
            b: "Assets = Liabilities - Owner's Equity",
            c: "Assets + Owner's Equity = Liabilities",
            d: "Assets = Liabilities + Owner's Equity"
        },
        correct_option: 'd',
        explanation: "The fundamental accounting equation states that a company's total assets are equal to the sum of its liabilities and its owner's equity. This balance ensures that all resources (assets) are financed by either debt (liabilities) or the owner's investment (equity).",
        is_premium: false
    }
]

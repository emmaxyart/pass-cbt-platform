import { Question } from '@/types'

export const mockQuestions: Question[] = [
    {
        id: '1',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The manager’s <u>clandestine</u> activities were finally exposed.',
        options: {
            a: 'Open',
            b: 'Secret',
            c: 'Honest',
            d: 'Illegal'
        },
        correct_option: 'b',
        explanation: 'Clandestine means kept secret or done secretively, especially because illicit.',
        is_premium: false
    },
    {
        id: '2',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for x: 2x + 5 = 15',
        options: {
            a: '5',
            b: '10',
            c: '15',
            d: '20'
        },
        correct_option: 'a',
        explanation: '2x = 15 - 5 => 2x = 10 => x = 5',
        is_premium: false
    },
    {
        id: '3',
        subject: 'Physics',
        year: 2023,
        question: 'Which of the following is a fundamental unit?',
        options: {
            a: 'Newton',
            b: 'Joule',
            c: 'Kilogram',
            d: 'Watt'
        },
        correct_option: 'c',
        explanation: 'Kilogram is a fundamental unit of mass in the SI system.',
        is_premium: true
    },
    // English Questions
    {
        id: '4',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The student was <u>penultimate</u> in the race.',
        options: {
            a: 'First',
            b: 'Last',
            c: 'Second to last',
            d: 'Third'
        },
        correct_option: 'c',
        explanation: 'Penultimate means second to last in a series.',
        is_premium: false
    },
    {
        id: '5',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: His explanation was <u>concise</u>.',
        options: {
            a: 'Brief',
            b: 'Verbose',
            c: 'Clear',
            d: 'Short'
        },
        correct_option: 'b',
        explanation: 'Concise means giving a lot of information clearly and in a few words; verbose is the opposite.',
        is_premium: false
    },
    {
        id: '6',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that best explains the underlined expression: He could not <u>make out</u> what the teacher was saying.',
        options: {
            a: 'Write',
            b: 'Hear',
            c: 'Understand',
            d: 'Ignore'
        },
        correct_option: 'c',
        explanation: 'To make out something means to manage with some difficulty to see, hear, or understand something.',
        is_premium: false
    },
    {
        id: '7',
        subject: 'English',
        year: 2023,
        question: 'Complete the sentence with the most appropriate option: She had <u>hardly</u> entered the room ___ the light went out.',
        options: {
            a: 'than',
            b: 'when',
            c: 'then',
            d: 'but'
        },
        correct_option: 'b',
        explanation: '"Hardly" is typically followed by "when" in this context.',
        is_premium: false
    },
    {
        id: '8',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: The <u>scarcity</u> of fuel led to high transport fares.',
        options: {
            a: 'Lack',
            b: 'Shortage',
            c: 'Abundance',
            d: 'Poverty'
        },
        correct_option: 'c',
        explanation: 'Scarcity means being in short supply; abundance is the opposite.',
        is_premium: false
    },
    {
        id: '9',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The team was <u>ecstatic</u> after the victory.',
        options: {
            a: 'Sad',
            b: 'Confused',
            c: 'Joyful',
            d: 'Anxious'
        },
        correct_option: 'c',
        explanation: 'Ecstatic means feeling or expressing overwhelming happiness or joyful excitement.',
        is_premium: false
    },
    {
        id: '10',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is opposite in meaning to the underlined word: The judge\'s decision was <u>impartial</u>.',
        options: {
            a: 'Fair',
            b: 'Neutral',
            c: 'Biased',
            d: 'Just'
        },
        correct_option: 'c',
        explanation: 'Impartial means treating all rivals or disputants equally; biased is the opposite.',
        is_premium: false
    },
    {
        id: '11',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that best explains the underlined expression: The student decided to <u>burn the midnight oil</u> to pass the exam.',
        options: {
            a: 'Light a lamp',
            b: 'Study late at night',
            c: 'Sleep early',
            d: 'Waste fuel'
        },
        correct_option: 'b',
        explanation: 'To burn the midnight oil means to read or work late into the night.',
        is_premium: false
    },
    {
        id: '12',
        subject: 'English',
        year: 2023,
        question: 'Choose the option that is nearest in meaning to the underlined word: The constant <u>fluctuation</u> in prices is alarming.',
        options: {
            a: 'Stability',
            b: 'Increase',
            c: 'Variation',
            d: 'Decrease'
        },
        correct_option: 'c',
        explanation: 'Fluctuation refers to an irregular rising and falling in number or amount; variation is a near synonym.',
        is_premium: false
    },
    {
        id: '13',
        subject: 'English',
        year: 2023,
        question: 'Complete the sentence with the most appropriate option: Neither the teacher nor the students ___ present.',
        options: {
            a: 'is',
            b: 'are',
            c: 'were',
            d: 'was'
        },
        correct_option: 'c',
        explanation: 'When "neither...nor" connects subjects, the verb should agree with the nearer subject (students), which is plural.',
        is_premium: false
    },

    // Mathematics Questions
    {
        id: '14',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the value of x if log10(x) = 2.',
        options: {
            a: '10',
            b: '20',
            c: '100',
            d: '200'
        },
        correct_option: 'c',
        explanation: 'log10(x) = 2 means x = 10^2 = 100.',
        is_premium: false
    },
    {
        id: '15',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for y: 3y - 4 = 11.',
        options: {
            a: '3',
            b: '4',
            c: '5',
            d: '6'
        },
        correct_option: 'c',
        explanation: '3y = 11 + 4 => 3y = 15 => y = 5.',
        is_premium: false
    },
    {
        id: '16',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the area of a rectangle with length 10cm and width 5cm.',
        options: {
            a: '15cm²',
            b: '25cm²',
            c: '50cm²',
            d: '100cm²'
        },
        correct_option: 'c',
        explanation: 'Area = length × width = 10 × 5 = 50.',
        is_premium: false
    },
    {
        id: '17',
        subject: 'Mathematics',
        year: 2023,
        question: 'If a bag contains 3 red balls and 5 blue balls, what is the probability of picking a red ball at random?',
        options: {
            a: '3/5',
            b: '3/8',
            c: '5/8',
            d: '1/3'
        },
        correct_option: 'b',
        explanation: 'Total balls = 3 + 5 = 8. Probability = favorable outcomes / total outcomes = 3/8.',
        is_premium: false
    },
    {
        id: '18',
        subject: 'Mathematics',
        year: 2023,
        question: 'Solve for x: x² - 5x + 6 = 0.',
        options: {
            a: '2, 3',
            b: '-2, -3',
            c: '1, 6',
            d: '-1, -6'
        },
        correct_option: 'a',
        explanation: '(x - 2)(x - 3) = 0 => x = 2 or x = 3.',
        is_premium: false
    },
    {
        id: '19',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the 10th term of the Arithmetic Progression (A.P): 2, 5, 8...',
        options: {
            a: '27',
            b: '29',
            c: '31',
            d: '33'
        },
        correct_option: 'b',
        explanation: 'a = 2, d = 3. 10th term = a + (n-1)d = 2 + 9(3) = 29.',
        is_premium: false
    },
    {
        id: '20',
        subject: 'Mathematics',
        year: 2023,
        question: 'Calculate the simple interest on N2000 for 2 years at 5% per annum.',
        options: {
            a: 'N100',
            b: 'N200',
            c: 'N300',
            d: 'N400'
        },
        correct_option: 'b',
        explanation: 'I = PRT/100 = (2000 × 5 × 2)/100 = 200.',
        is_premium: false
    },
    {
        id: '21',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the median of the numbers: 2, 5, 3, 8, 1.',
        options: {
            a: '2',
            b: '3',
            c: '5',
            d: '8'
        },
        correct_option: 'b',
        explanation: 'Ordered list: 1, 2, 3, 5, 8. The middle number is 3.',
        is_premium: false
    },
    {
        id: '22',
        subject: 'Mathematics',
        year: 2023,
        question: 'Simplify: (x³ × x²) / x⁴.',
        options: {
            a: 'x',
            b: 'x²',
            c: 'x⁵',
            d: '1'
        },
        correct_option: 'a',
        explanation: '(x³ × x²) = x⁵. x⁵ / x⁴ = x.',
        is_premium: false
    },
    {
        id: '23',
        subject: 'Mathematics',
        year: 2023,
        question: 'Find the value of sin 30°.',
        options: {
            a: '0',
            b: '0.5',
            c: '0.707',
            d: '1'
        },
        correct_option: 'b',
        explanation: 'sin 30° is a standard trigonometric value equal to 0.5.',
        is_premium: false
    }
]

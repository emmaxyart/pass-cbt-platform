export interface SyllabusTopic {
    title: string
    subtopics?: string[]
    objectives?: string[]
    section?: string
}

export const syllabusTopics: Record<string, SyllabusTopic[]> = {
    'mathematics': [
        // SECTION I: NUMBER AND NUMERATION
        {
            section: 'Section I: Number and Numeration',
            title: 'Number Bases',
            subtopics: [
                'Operations in different number bases from 2 to 10',
                'Conversion from one base to another including fractional parts',
            ],
            objectives: [
                'Perform four basic operations (×, +, −, ÷)',
                'Convert one base to another',
            ],
        },
        {
            section: 'Section I: Number and Numeration',
            title: 'Fractions, Decimals, Approximations and Percentages',
            subtopics: [
                'Fractions and decimals',
                'Significant figures',
                'Decimal places',
                'Percentage errors',
                'Simple interest',
                'Profit and loss percent',
                'Ratio, proportion and rate',
                'Shares and Value Added Tax (VAT)',
            ],
            objectives: [
                'Perform basic operations (×, +, −, ÷) on fractions and decimals',
                'Express to specified number of significant figures and decimal places',
                'Calculate simple interest, profit and loss percent; ratio, proportion and rate',
                'Solve problems involving share and VAT',
            ],
        },
        {
            section: 'Section I: Number and Numeration',
            title: 'Indices, Logarithms and Surds',
            subtopics: [
                'Laws of indices',
                'Standard form',
                'Laws of logarithm',
                'Logarithm of any positive number to a given base',
                'Change of bases in logarithm and application',
                'Relationship between indices and logarithm',
                'Surds',
            ],
            objectives: [
                'Apply the laws of indices in calculation',
                'Establish the relationship between indices and logarithms in solving problems',
                'Solve problems in different bases in logarithms',
                'Simplify and rationalize surds',
                'Perform basic operations on surds',
            ],
        },
        {
            section: 'Section I: Number and Numeration',
            title: 'Sets',
            subtopics: [
                'Types of sets',
                'Algebra of sets',
                'Venn diagrams and their applications',
            ],
            objectives: [
                'Identify types of sets, i.e. empty, universal, complements, subsets, finite, infinite and disjoint sets',
                'Solve problems involving cardinality of sets',
                'Solve set problems using symbols',
                'Use Venn diagrams to solve problems involving not more than 3 sets',
            ],
        },

        // SECTION II: ALGEBRA
        {
            section: 'Section II: Algebra',
            title: 'Polynomials',
            subtopics: [
                'Change of subject of formula',
                'Factor and remainder theorems',
                'Factorization of polynomials of degree not exceeding 3',
                'Multiplication and division of polynomials',
                'Roots of polynomials not exceeding degree 3',
                'Simultaneous equations including one linear one quadratic',
                'Graphs of polynomials of degree not greater than 3',
            ],
            objectives: [
                'Find the subject of the formula of a given equation',
                'Apply factor and remainder theorem to factorize a given expression',
                'Multiply and divide polynomials of degree not more than 3',
                'Factorize by regrouping difference of two squares, perfect squares and cubic expressions; etc.',
                'Solve simultaneous equations — one linear, one quadratic',
                'Interpret graphs of polynomials including applications to maximum and minimum values',
            ],
        },
        {
            section: 'Section II: Algebra',
            title: 'Variation',
            subtopics: [
                'Direct',
                'Inverse',
                'Joint',
                'Partial',
                'Percentage increase and decrease',
            ],
            objectives: [
                'Solve problems involving direct, inverse, joint and partial variations',
                'Solve problems on percentage increase and decrease in variation',
            ],
        },
        {
            section: 'Section II: Algebra',
            title: 'Inequalities',
            subtopics: [
                'Analytical and graphical solutions of linear inequalities',
                'Quadratic inequalities with integral roots only',
            ],
            objectives: [
                'Solve problems on linear and quadratic inequalities',
                'Interpret graphs of inequalities',
            ],
        },
        {
            section: 'Section II: Algebra',
            title: 'Progression',
            subtopics: [
                'nth term of a progression',
                'Sum of A.P. and G.P.',
            ],
            objectives: [
                'Determine the nth term of a progression',
                'Compute the sum of A.P. and G.P.',
                'Sum to infinity of a given G.P.',
            ],
        },
        {
            section: 'Section II: Algebra',
            title: 'Binary Operations',
            subtopics: [
                'Properties of closure, commutativity, associativity and distributivity',
                'Identity and inverse elements (simple cases only)',
            ],
            objectives: [
                'Solve problems involving closure, commutativity, associativity and distributivity',
                'Solve problems involving identity and inverse elements',
            ],
        },
        {
            section: 'Section II: Algebra',
            title: 'Matrices and Determinants',
            subtopics: [
                'Algebra of matrices not exceeding 3 × 3',
                'Determinants of matrices not exceeding 3 × 3',
                'Inverses of 2 × 2 matrices (excluding quadratic and higher degree equations)',
            ],
            objectives: [
                'Perform basic operations (×, +, −, ÷) on matrices',
                'Calculate determinants',
                'Compute inverses of 2 × 2 matrices',
            ],
        },

        // SECTION III: GEOMETRY AND TRIGONOMETRY
        {
            section: 'Section III: Geometry and Trigonometry',
            title: 'Euclidean Geometry',
            subtopics: [
                'Properties of angles and lines',
                'Polygons: triangles, quadrilaterals and general polygons',
                'Circles: angle properties, cyclic quadrilaterals and intersecting chords',
                'Construction',
            ],
            objectives: [
                'Identify various types of lines and angles',
                'Solve problems involving polygons',
                'Calculate angles using circle theorems',
                'Identify construction procedures of special angles, e.g. 30°, 45°, 60°, 75°, 90° etc.',
            ],
        },
        {
            section: 'Section III: Geometry and Trigonometry',
            title: 'Mensuration',
            subtopics: [
                'Lengths and areas of plane geometrical figures',
                'Lengths of arcs and chords of a circle',
                'Perimeters and areas of sectors and segments of circles',
                'Surface areas and volumes of simple solids and composite figures',
                'The earth as a sphere: longitudes and latitudes',
            ],
            objectives: [
                'Calculate the perimeters and areas of triangles, quadrilaterals, circles and composite figures',
                'Find the length of an arc, a chord, perimeters and areas of sectors and segments of circles',
                'Calculate total surface areas and volumes of cuboids, cylinders, cones, pyramids, prisms, spheres and composite figures',
                'Determine the distance between two points on the earth\'s surface',
            ],
        },
        {
            section: 'Section III: Geometry and Trigonometry',
            title: 'Loci',
            subtopics: [
                'Locus in 2 dimensions based on geometric principles relating to lines and curves',
            ],
            objectives: [
                'Identify and interpret loci relating to parallel lines, perpendicular bisectors, angle bisectors and circles',
            ],
        },
        {
            section: 'Section III: Geometry and Trigonometry',
            title: 'Coordinate Geometry',
            subtopics: [
                'Midpoint and gradient of a line segment',
                'Distance between two points',
                'Parallel and perpendicular lines',
                'Equations of straight lines',
            ],
            objectives: [
                'Determine the midpoint and gradient of a line segment',
                'Find the distance between two points',
                'Identify conditions for parallelism and perpendicularity',
                'Find the equation of a line in the two-point form, point-slope form, slope intercept form and the general form',
            ],
        },
        {
            section: 'Section III: Geometry and Trigonometry',
            title: 'Trigonometry',
            subtopics: [
                'Trigonometrical ratios of angles',
                'Angles of elevation and depression',
                'Bearings',
                'Areas and solutions of triangle',
                'Graphs of sine and cosine',
                'Sine and cosine formulae',
            ],
            objectives: [
                'Calculate the sine, cosine and tangent of angles between −360° ≤ θ ≤ 360°',
                'Apply these special angles, e.g. 30°, 45°, 60°, 75°, 90°, 105°, 135° to solve simple problems in trigonometry',
                'Solve problems involving angles of elevation and depression',
                'Solve problems involving bearings',
                'Apply trigonometric formulae to find areas of triangles',
                'Solve problems involving sine and cosine graphs',
            ],
        },

        // SECTION IV: CALCULUS
        {
            section: 'Section IV: Calculus',
            title: 'Differentiation',
            subtopics: [
                'Limit of a function',
                'Differentiation of explicit algebraic and simple trigonometrical functions — sine, cosine and tangent',
            ],
            objectives: [
                'Find the limit of a function',
                'Differentiate explicit algebraic and simple trigonometrical functions',
            ],
        },
        {
            section: 'Section IV: Calculus',
            title: 'Application of Differentiation',
            subtopics: [
                'Rate of change',
                'Maxima and minima',
            ],
            objectives: [
                'Solve problems involving applications of rate of change, maxima and minima',
            ],
        },
        {
            section: 'Section IV: Calculus',
            title: 'Integration',
            subtopics: [
                'Integration of explicit algebraic and simple trigonometrical functions',
                'Area under the curve',
            ],
            objectives: [
                'Solve problems of integration involving algebraic and simple trigonometric functions',
                'Calculate area under the curve (simple cases only)',
            ],
        },

        // SECTION V: STATISTICS
        {
            section: 'Section V: Statistics',
            title: 'Representation of Data',
            subtopics: [
                'Frequency distribution',
                'Histogram, bar chart and pie chart',
            ],
            objectives: [
                'Identify and interpret frequency distribution tables',
                'Interpret information on histogram, bar chart and pie chart',
            ],
        },
        {
            section: 'Section V: Statistics',
            title: 'Measures of Location',
            subtopics: [
                'Mean, mode and median of ungrouped and grouped data (simple cases only)',
                'Cumulative frequency',
            ],
            objectives: [
                'Calculate the mean, mode and median of ungrouped and grouped data (simple cases only)',
                'Use ogive to find the median, quartiles and percentiles',
            ],
        },
        {
            section: 'Section V: Statistics',
            title: 'Measures of Dispersion',
            subtopics: [
                'Range, mean deviation, variance and standard deviation',
            ],
            objectives: [
                'Calculate the range, mean deviation, variance and standard deviation of ungrouped and grouped data',
            ],
        },
        {
            section: 'Section V: Statistics',
            title: 'Permutation and Combination',
            subtopics: [
                'Linear and circular arrangements',
                'Arrangements involving repeated objects',
            ],
            objectives: [
                'Solve simple problems involving permutation and combination',
            ],
        },
        {
            section: 'Section V: Statistics',
            title: 'Probability',
            subtopics: [
                'Experimental probability (tossing of coin, throwing of a dice etc.)',
                'Addition and multiplication of probabilities (mutual and independent cases)',
            ],
            objectives: [
                'Solve simple problems in probability (including addition and multiplication)',
            ],
        },
    ],
    'english-language': [
        // SECTION A: COMPREHENSION / SUMMARY
        {
            section: 'Section A: Comprehension / Summary',
            title: 'Passage Types',
            subtopics: [
                'Description',
                'Narration',
                'Exposition',
                'Argumentation / Persuasion',
            ],
            objectives: [
                'Identify main points and topic sentences in passages',
                'Determine implied meaning from passages',
                'Identify the grammatical functions of words, phrases, clauses and figurative/idiomatic expressions',
                'Deduce or infer the writer\'s intentions including mood, attitude to the subject matter and opinion',
            ],
        },
        {
            section: 'Section A: Comprehension / Summary',
            title: 'Comprehension Skills',
            subtopics: [
                'Comprehension of the whole or part of each passage',
                'Comprehension of words, phrases, clauses, sentences, figures of speech and idioms as used in passages',
                'Coherence and logical reasoning (deductions, inferences, etc.)',
                'Synthesis of ideas from the passages (combining distinct pieces of information to form a complete whole)',
            ],
            objectives: [
                'Identify main points/topic sentences in passages',
                'Determine implied meaning',
                'Identify the grammatical functions of words, phrases, clauses and figurative/idiomatic expressions',
                'Deduce or infer the writer\'s intentions including mood, attitude to the subject matter and opinion',
            ],
        },
        {
            section: 'Section A: Comprehension / Summary',
            title: 'Exam Structure — Section A',
            subtopics: [
                '1 Comprehension passage — 5 questions',
                '1 Cloze passage — 10 questions',
                '1 Reading text (The Lekki Headmaster by Kabir Alabi Garba) — 10 questions',
            ],
        },

        // SECTION B: LEXIS AND STRUCTURE
        {
            section: 'Section B: Lexis and Structure',
            title: 'Vocabulary',
            subtopics: [
                'Synonyms',
                'Antonyms',
                'Homonyms',
                'Ordinary usage, figurative usage and idiomatic usage',
                'Idioms (formal idioms expressed in standard British English)',
            ],
            objectives: [
                'Identify words and expressions in their ordinary, figurative and idiomatic contexts',
                'Determine similar and opposite meaning of words',
            ],
        },
        {
            section: 'Section B: Lexis and Structure',
            title: 'Grammar and Structure',
            subtopics: [
                'Clause and sentence patterns',
                'Word classes and their functions',
                'Mood, tense, aspect, number',
                'Agreement / Concord',
                'Degree (positive, comparative and superlative)',
                'Question tags',
                'Punctuation and spelling',
            ],
            objectives: [
                'Differentiate between correct and incorrect punctuation and spelling',
                'Identify various grammatical patterns in use',
                'Interpret information conveyed in sentences',
            ],
        },
        {
            section: 'Section B: Lexis and Structure',
            title: 'Exam Structure — Section B',
            subtopics: [
                'Sentence interpretation — 5 questions',
                'Antonyms — 5 questions',
                'Synonyms — 5 questions',
                'Sentence completion — 10 questions',
            ],
        },

        // SECTION C: ORAL FORMS
        {
            section: 'Section C: Oral Forms',
            title: 'Vowels and Consonants',
            subtopics: [
                'Vowels: monophthongs (pure vowels)',
                'Vowels: diphthongs (gliding vowels)',
                'Consonants (including clusters)',
                'Rhymes (including homophones)',
            ],
            objectives: [
                'Make distinctions between vowel types (monophthongs and diphthongs)',
                'Differentiate between consonant types including clusters',
                'Identify correct accentuation in individual words and connected speech',
            ],
        },
        {
            section: 'Section C: Oral Forms',
            title: 'Stress and Intonation',
            subtopics: [
                'Word stress — monosyllabic words',
                'Word stress — polysyllabic words',
                'Intonation patterns',
                'Emphatic stress (placement of normal stress on words for the purpose of emphasis)',
            ],
            objectives: [
                'Identify correct word stress in monosyllabic and polysyllabic words',
                'Identify emphatic stress and intonation patterns in utterances',
                'Identify correct accentuation in connected speech',
            ],
        },
        {
            section: 'Section C: Oral Forms',
            title: 'Exam Structure — Section C',
            subtopics: [
                'Oral Forms questions — 10 questions',
                'Total examination questions: 60',
            ],
        },
    ],
    'chemistry': [
        { title: 'Separation of Mixtures and Purification of Chemical Substances', subtopics: ['Pure and impure substances', 'Boiling and melting point', 'Separation techniques (filtration, crystallization, distillation, chromatography)'] },
        { title: 'Chemical Combination', subtopics: ['Laws of chemical combination', 'Chemical formulae, equations and stoichiometry', 'Atomic structure and bonding'] },
        { title: 'Kinetic Theory of Matter and Gas Laws', subtopics: ['Kinetic theory of gases', 'Gas laws (Boyle\'s, Charles\', Dalton\'s, Graham\'s)', 'Gay-Lussac\'s law and Avogadro\'s law'] },
        { title: 'Atomic Structure and Bonding', subtopics: ['Atomic models', 'Electronic configuration', 'Types of bonding (ionic, covalent, metallic)', 'Shapes of molecules'] },
        { title: 'Electrolysis', subtopics: ['Electrolytes and non-electrolytes', 'Faraday\'s laws of electrolysis', 'Applications of electrolysis (electroplating, extraction of metals)'] },
        { title: 'Energy and Energy Changes', subtopics: ['Energy changes in chemical reactions', 'Entropy and enthalpy', 'Hess\'s law', 'Born-Haber cycle'] },
        { title: 'Rates of Chemical Reaction', subtopics: ['Factors affecting rate of reaction', 'Collision theory', 'Equilibrium and Le Chatelier\'s principle'] },
        { title: 'Acids, Bases and Salts', subtopics: ['Properties of acids, bases and salts', 'pH scale and indicators', 'Neutralization and hydrolysis', 'Buffer solutions'] },
        { title: 'Metals and Non-metals', subtopics: ['Properties and extraction of metals', 'Alloys and corrosion', 'Properties of non-metals (hydrogen, oxygen, nitrogen, chlorine, sulphur, carbon)'] },
        { title: 'Organic Chemistry', subtopics: ['Hydrocarbons (alkanes, alkenes, alkynes)', 'Functional groups and homologous series', 'Petrochemicals and polymers', 'Fats, oils, proteins and carbohydrates'] },
    ],
    'physics': [
        { title: 'Measurements and Units', subtopics: ['Fundamental and derived quantities', 'Units and dimensions', 'Measurement of length, mass and time', 'Errors and uncertainties'] },
        { title: 'Scalars and Vectors', subtopics: ['Definition of scalar and vector quantities', 'Addition and resolution of vectors', 'Resultant of forces'] },
        { title: 'Motion', subtopics: ['Types of motion (linear, circular, projectile)', 'Speed, velocity and acceleration', 'Newton\'s laws of motion', 'Motion under gravity', 'Simple harmonic motion'] },
        { title: 'Energy, Work and Power', subtopics: ['Forms and conservation of energy', 'Work done', 'Power and efficiency', 'Machines and mechanical advantage'] },
        { title: 'Waves', subtopics: ['Types of waves (transverse and longitudinal)', 'Properties of waves (reflection, refraction, diffraction, interference)', 'Sound waves', 'Light waves and electromagnetic spectrum'] },
        { title: 'Heat and Temperature', subtopics: ['Temperature scales and measurement', 'Heat capacity and specific heat', 'Latent heat', 'Thermal expansion', 'Gas laws'] },
        { title: 'Electricity', subtopics: ['Electric charges and fields', 'Capacitance', 'Current electricity (Ohm\'s law, circuits)', 'Electrical energy and power', 'Electromagnetic induction'] },
        { title: 'Modern Physics', subtopics: ['Atomic structure and radioactivity', 'Nuclear reactions', 'Photoelectric effect', 'Wave-particle duality', 'X-rays'] },
    ],
    'biology': [
        { title: 'Organization of Life', subtopics: ['Levels of organization (cell, tissue, organ, system)', 'Cell structure and functions', 'Types of cells (plant and animal cells)', 'Cell division (mitosis and meiosis)'] },
        { title: 'Plant and Animal Nutrition', subtopics: ['Autotrophic nutrition (photosynthesis)', 'Heterotrophic nutrition', 'Mineral nutrition in plants', 'Digestive system in animals', 'Modes of nutrition'] },
        { title: 'Transport System', subtopics: ['Transport in plants (osmosis, diffusion, transpiration)', 'Circulatory system in animals', 'Blood and its components', 'Heart structure and function'] },
        { title: 'Respiration', subtopics: ['Aerobic and anaerobic respiration', 'Respiratory organs', 'Gaseous exchange in plants and animals'] },
        { title: 'Excretion', subtopics: ['Excretory organs', 'Kidney structure and function', 'Excretion in plants'] },
        { title: 'Reproduction', subtopics: ['Asexual reproduction', 'Sexual reproduction in plants', 'Sexual reproduction in animals', 'Reproductive system in humans', 'Fertilization and development'] },
        { title: 'Growth and Development', subtopics: ['Aspects of growth', 'Growth hormones', 'Metamorphosis'] },
        { title: 'Coordination and Control', subtopics: ['Nervous system', 'Sense organs', 'Hormonal coordination', 'Plant hormones (auxins, gibberellins)'] },
        { title: 'Heredity and Variation', subtopics: ['Mendel\'s laws of inheritance', 'Chromosomes and genes', 'Sex determination and sex-linked characters', 'Mutation', 'Application of genetics (plant and animal breeding)'] },
        { title: 'Ecology', subtopics: ['Ecosystem and biomes', 'Food chains and food webs', 'Energy flow in ecosystems', 'Population ecology', 'Environmental pollution and conservation'] },
        { title: 'Evolution', subtopics: ['Theories of evolution (Lamarck, Darwin)', 'Evidence of evolution', 'Natural selection and adaptation'] },
    ],
    'geography': [
        { title: 'Map Reading and Interpretation', subtopics: ['Types of maps and scales', 'Map projections', 'Conventional signs and symbols', 'Contours and relief representation', 'Cross-section and gradient calculation'] },
        { title: 'Physical Geography', subtopics: ['Earth\'s structure and composition', 'Rocks and minerals', 'Weathering and mass movement', 'Landforms and their formation', 'Climate and weather'] },
        { title: 'Human Geography', subtopics: ['Population distribution and density', 'Settlement types and patterns', 'Migration', 'Urbanization'] },
        { title: 'Regional Geography of Africa and Nigeria', subtopics: ['Physical features of Africa', 'Climate regions of Africa', 'Vegetation belts of Nigeria', 'Economic activities and resources'] },
        { title: 'Environmental Issues', subtopics: ['Environmental degradation', 'Desertification and drought', 'Flooding and erosion', 'Conservation practices'] },
    ],
    'literature-in-english': [
        { title: 'Drama', subtopics: ['Elements of drama', 'Types of drama (tragedy, comedy, tragicomedy)', 'Dramatic techniques', 'Study of set texts'] },
        { title: 'Poetry', subtopics: ['Elements of poetry', 'Figures of speech', 'Poetic forms (sonnet, ode, elegy, ballad)', 'Analysis of set poems'] },
        { title: 'Prose', subtopics: ['Elements of prose (plot, character, theme, setting, style)', 'Types of prose (novel, novella, short story)', 'Study of set texts'] },
        { title: 'Literary Terms and Devices', subtopics: ['Irony, satire, and parody', 'Symbolism and allegory', 'Point of view and narrative techniques', 'Flashback, foreshadowing, and suspense'] },
        { title: 'African Literature', subtopics: ['Characteristics of African literature', 'Themes in African literature', 'Major African writers and their works'] },
    ],
    'economics': [
        { title: 'Basic Economic Concepts', subtopics: ['Scarcity, choice and opportunity cost', 'Economic systems (capitalism, socialism, mixed economy)', 'Factors of production', 'Division of labour and specialization'] },
        { title: 'Demand and Supply', subtopics: ['Law of demand and supply', 'Elasticity of demand and supply', 'Market equilibrium', 'Price controls and their effects'] },
        { title: 'Theory of Production', subtopics: ['Production function', 'Law of diminishing returns', 'Costs and revenue', 'Economies and diseconomies of scale'] },
        { title: 'Market Structures', subtopics: ['Perfect competition', 'Monopoly and monopolistic competition', 'Oligopoly', 'Price discrimination'] },
        { title: 'National Income', subtopics: ['Measurement of national income (GDP, GNP, NNP)', 'Methods of computing national income', 'Uses and limitations of national income data'] },
        { title: 'Money and Banking', subtopics: ['Functions of money', 'Types of money', 'Commercial and central banking', 'Monetary policy'] },
        { title: 'International Trade', subtopics: ['Balance of trade and balance of payments', 'Terms of trade', 'Trade restrictions (tariffs, quotas)', 'Economic integration (ECOWAS, AU)'] },
        { title: 'Public Finance', subtopics: ['Government revenue and expenditure', 'Taxation (types and principles)', 'National budget', 'National debt'] },
    ],
    'commerce': [
        { title: 'Basic Concepts of Commerce', subtopics: ['Definition and scope of commerce', 'Occupation, industry and commerce', 'Trade (home and foreign)'] },
        { title: 'Trade', subtopics: ['Home trade (wholesale and retail)', 'Foreign trade', 'Terms of trade', 'Documents used in trade'] },
        { title: 'Aids to Trade', subtopics: ['Banking (types and functions)', 'Insurance (types and principles)', 'Transportation', 'Communication', 'Warehousing', 'Advertising'] },
        { title: 'Business Organizations', subtopics: ['Sole proprietorship', 'Partnership', 'Joint stock companies', 'Cooperative societies', 'Public enterprises'] },
        { title: 'Financial Institutions', subtopics: ['Commercial banks', 'Central bank', 'Development banks', 'Stock exchange', 'Insurance companies'] },
    ],
    'principles-of-accounts': [
        { title: 'Introduction to Book-keeping and Accounting', subtopics: ['Purpose of accounting', 'Users of accounting information', 'Basic accounting concepts and conventions'] },
        { title: 'Double Entry System', subtopics: ['Recording transactions', 'Ledger accounts', 'Trial balance'] },
        { title: 'Financial Statements', subtopics: ['Trading account', 'Profit and loss account', 'Balance sheet', 'Manufacturing account'] },
        { title: 'Accounting for Special Transactions', subtopics: ['Partnership accounts', 'Company accounts', 'Departmental accounts', 'Branch accounts'] },
        { title: 'Cost and Management Accounting', subtopics: ['Cost classification', 'Budgeting', 'Standard costing', 'Break-even analysis'] },
    ],
    'government': [
        { title: 'Basic Concepts in Government', subtopics: ['Definition of government', 'Functions of government', 'Political power, authority and legitimacy', 'Sovereignty'] },
        { title: 'Forms of Government', subtopics: ['Monarchy and republic', 'Unitary and federal systems', 'Presidential and parliamentary systems', 'Confederal system'] },
        { title: 'Arms of Government', subtopics: ['The Legislature', 'The Executive', 'The Judiciary', 'Separation of powers and checks and balances'] },
        { title: 'Political Parties and Pressure Groups', subtopics: ['Types of political parties', 'Functions of political parties', 'Pressure groups and their roles', 'Elections and electoral systems'] },
        { title: 'Nigerian Government and Politics', subtopics: ['Pre-colonial political systems', 'Colonial administration', 'Constitutional development in Nigeria', 'Political parties in Nigeria', 'Military rule in Nigeria'] },
        { title: 'International Organizations', subtopics: ['United Nations Organization (UNO)', 'African Union (AU)', 'Economic Community of West African States (ECOWAS)', 'Commonwealth of Nations'] },
    ],
    'crk': [
        { title: 'Themes from the Old Testament', subtopics: ['Creation and the fall of man', 'The patriarchs (Abraham, Isaac, Jacob)', 'Moses and the Exodus', 'The covenant and the Ten Commandments', 'The monarchy (Saul, David, Solomon)'] },
        { title: 'Themes from the New Testament', subtopics: ['The birth and early life of Jesus', 'The baptism and temptation of Jesus', 'The ministry and teachings of Jesus', 'Parables and miracles of Jesus', 'The death, resurrection and ascension of Jesus'] },
        { title: 'The Early Church', subtopics: ['The day of Pentecost', 'The apostles\' ministry', 'The conversion of Paul', 'The spread of Christianity', 'Persecution of early Christians'] },
        { title: 'Christian Ethics', subtopics: ['Love and forgiveness', 'Justice and righteousness', 'Obedience to God', 'Service to humanity', 'Christian family life'] },
    ],
    'agricultural-science': [
        { title: 'General Agriculture', subtopics: ['Meaning and importance of agriculture', 'Branches of agriculture', 'Agricultural ecology', 'Problems of Nigerian agriculture'] },
        { title: 'Crop Production', subtopics: ['Classification of crops', 'Cultural practices', 'Crop diseases and pests', 'Harvesting and storage'] },
        { title: 'Animal Production', subtopics: ['Classification of farm animals', 'Breeds of livestock', 'Animal nutrition and feeding', 'Animal health management'] },
        { title: 'Soil Science', subtopics: ['Soil formation and composition', 'Soil types and properties', 'Soil conservation', 'Soil fertility and fertilizers'] },
        { title: 'Agricultural Economics and Extension', subtopics: ['Farm management', 'Agricultural finance and credit', 'Agricultural marketing', 'Agricultural extension services'] },
    ],
    'irk': [
        { title: 'Tawhid (Monotheism)', subtopics: ['Concept of Tawhid', 'Attributes of Allah', 'Articles of faith', 'Shirk and its types'] },
        { title: 'Fiqh (Islamic Jurisprudence)', subtopics: ['Sources of Shariah', 'Pillars of Islam', 'Islamic transactions', 'Family law in Islam'] },
        { title: 'History of Islam', subtopics: ['The Prophet Muhammad (SAW)', 'The Rightly Guided Caliphs', 'The spread of Islam in West Africa', 'Islamic civilization and contributions'] },
        { title: 'Hadith', subtopics: ['Categories of Hadith', 'Selected Hadith and their teachings', 'Importance of Hadith in Islam'] },
        { title: 'Moral Teachings', subtopics: ['Good character in Islam', 'Social relations in Islam', 'Rights and responsibilities', 'Islamic ethics'] },
    ],
    'history': [
        { title: 'Nigerian History', subtopics: ['Pre-colonial societies', 'Impact of trade routes', 'The slave trade and its effects', 'Colonial rule and nationalism', 'Independence and post-independence challenges'] },
        { title: 'West African History', subtopics: ['West African empires (Ghana, Mali, Songhai)', 'European activities in West Africa', 'The scramble for and partition of Africa'] },
        { title: 'World History', subtopics: ['The Industrial Revolution', 'World War I and II', 'The Cold War', 'Decolonization movements'] },
    ],
    'fine-arts': [
        { title: 'Art History', subtopics: ['Prehistoric art', 'Ancient Egyptian art', 'Nigerian traditional art (Nok, Ife, Benin)', 'Modern and contemporary art'] },
        { title: 'Elements and Principles of Design', subtopics: ['Line, shape, color, texture, form, space', 'Balance, rhythm, proportion, emphasis, unity'] },
        { title: 'Drawing and Painting', subtopics: ['Techniques of drawing', 'Painting media and methods', 'Still life, figure drawing, landscape'] },
        { title: 'Craft and Design', subtopics: ['Ceramics and pottery', 'Textile design', 'Graphic design', 'Sculpture'] },
    ],
    'music': [
        { title: 'Rudiments of Music', subtopics: ['Musical notation', 'Scales and keys', 'Time signatures and tempo', 'Intervals'] },
        { title: 'Theory of Music', subtopics: ['Harmony and chord progressions', 'Musical forms and structures', 'Transposition', 'Cadences'] },
        { title: 'History of Music', subtopics: ['Western music periods (Baroque, Classical, Romantic)', 'African music traditions', 'Nigerian traditional music'] },
        { title: 'Aural Perception', subtopics: ['Sight reading', 'Dictation', 'Recognition of instruments and voices'] },
    ],
    'french': [
        { title: 'Grammar', subtopics: ['Verb conjugation (présent, passé composé, futur)', 'Articles and pronouns', 'Adjectives and adverbs', 'Prepositions and conjunctions'] },
        { title: 'Comprehension', subtopics: ['Reading comprehension', 'Listening comprehension', 'Summary writing'] },
        { title: 'Vocabulary', subtopics: ['Everyday vocabulary', 'Idiomatic expressions', 'Synonyms and antonyms'] },
        { title: 'Essay Writing', subtopics: ['Letter writing', 'Narrative and descriptive essays', 'Dialogue and conversation'] },
    ],
    'animal-husbandry': [
        { title: 'Animal Classification and Breeds', subtopics: ['Classification of farm animals', 'Breeds of cattle, sheep, goats, pigs, poultry', 'Selection and breeding methods'] },
        { title: 'Animal Nutrition', subtopics: ['Types of feed', 'Feed formulation', 'Feeding systems', 'Water requirements'] },
        { title: 'Animal Health', subtopics: ['Common diseases', 'Disease prevention and control', 'Vaccination and medication', 'Parasites'] },
        { title: 'Animal Reproduction', subtopics: ['Reproductive organs', 'Reproductive cycles', 'Artificial insemination', 'Gestation and parturition'] },
    ],
    'insurance': [
        { title: 'Principles of Insurance', subtopics: ['Utmost good faith', 'Indemnity', 'Insurable interest', 'Subrogation and contribution', 'Proximate cause'] },
        { title: 'Types of Insurance', subtopics: ['Life insurance', 'Motor insurance', 'Fire insurance', 'Marine insurance', 'General insurance'] },
        { title: 'Insurance Market', subtopics: ['Underwriting', 'Insurance intermediaries', 'Reinsurance', 'Claims settlement'] },
    ],
    'civic-education': [
        { title: 'Values and Civic Responsibilities', subtopics: ['National values (unity, discipline, integrity)', 'Civic responsibilities and duties', 'Rights and obligations of citizens'] },
        { title: 'Democracy and Governance', subtopics: ['Concept of democracy', 'Rule of law', 'Human rights', 'Constitutionalism'] },
        { title: 'National Issues', subtopics: ['Corruption and anti-corruption agencies', 'Youth empowerment', 'Cultism and drug abuse', 'Traffic regulations'] },
    ],
    'further-mathematics': [
        { title: 'Pure Mathematics', subtopics: ['Complex numbers', 'Trigonometric functions and equations', 'Coordinate geometry (conic sections)', 'Calculus (differentiation and integration)'] },
        { title: 'Statistics and Probability', subtopics: ['Permutations and combinations', 'Probability distributions (binomial, Poisson, normal)', 'Correlation and regression'] },
        { title: 'Vectors and Mechanics', subtopics: ['Vector algebra', 'Statics (forces and equilibrium)', 'Dynamics (motion, momentum, energy)', 'Projectiles'] },
    ],
    'yoruba': [
        { title: 'Grammar (Gírámà)', subtopics: ['Parts of speech', 'Sentence construction', 'Tones and tonal marks', 'Proverbs and idioms'] },
        { title: 'Literature (Lítíréṣọ̀)', subtopics: ['Prose texts', 'Poetry', 'Drama', 'Oral literature'] },
        { title: 'Comprehension and Essay', subtopics: ['Passage reading and comprehension', 'Essay writing', 'Letter writing', 'Summary'] },
    ],
    'igbo': [
        { title: 'Grammar (Ụtọasụsụ)', subtopics: ['Parts of speech', 'Sentence patterns', 'Tonal system', 'Prefixes and suffixes'] },
        { title: 'Literature (Agụmagụ)', subtopics: ['Prose texts', 'Poetry', 'Drama', 'Oral literature and folklore'] },
        { title: 'Comprehension and Essay', subtopics: ['Passage reading', 'Essay and letter writing', 'Proverbs and idioms', 'Summary'] },
    ],
    'arabic': [
        { title: 'Grammar (Nahw)', subtopics: ['Parts of speech', 'Sentence types', 'Verb conjugation', 'Noun declension'] },
        { title: 'Literature (Adab)', subtopics: ['Pre-Islamic poetry', 'Islamic literature', 'Modern Arabic literature', 'Set texts'] },
        { title: 'Comprehension', subtopics: ['Reading comprehension', 'Translation', 'Essay writing'] },
    ],
    'home-economics': [
        { title: 'Foods and Nutrition', subtopics: ['Classification of foods', 'Meal planning', 'Food preservation', 'Nutritional deficiency diseases'] },
        { title: 'Clothing and Textiles', subtopics: ['Types of fibres and fabrics', 'Garment construction', 'Care of clothing', 'Fashion and design'] },
        { title: 'Home Management', subtopics: ['Family resources management', 'Consumer education', 'Housing and furnishing', 'Laundry and household cleaning'] },
    ],
    'hausa': [
        { title: 'Grammar (Nahawu)', subtopics: ['Parts of speech', 'Sentence structure', 'Tonal patterns', 'Proverbs and expressions'] },
        { title: 'Literature (Adabi)', subtopics: ['Prose', 'Poetry', 'Drama', 'Oral traditions'] },
        { title: 'Comprehension and Composition', subtopics: ['Reading passages', 'Essay and letter writing', 'Summary', 'Idioms and proverbs'] },
    ],
    'book-keeping': [
        { title: 'Fundamentals of Book-keeping', subtopics: ['Purpose and scope of book-keeping', 'Source documents', 'Books of original entry'] },
        { title: 'Double Entry System', subtopics: ['Recording transactions', 'Ledger posting', 'Balancing accounts', 'Trial balance'] },
        { title: 'Financial Statements', subtopics: ['Trading account', 'Profit and loss account', 'Balance sheet'] },
        { title: 'Control Accounts and Bank Reconciliation', subtopics: ['Bank reconciliation statements', 'Control accounts', 'Suspense accounts', 'Correction of errors'] },
    ],
    'data-processing': [
        { title: 'Basic Concepts of Data Processing', subtopics: ['Data and information', 'Types of data processing', 'Data processing cycle', 'Data transmission'] },
        { title: 'Information Technology', subtopics: ['Computer hardware and software', 'Operating systems', 'Computer networks', 'The internet'] },
        { title: 'Database Management', subtopics: ['Database concepts', 'Database design', 'SQL basics', 'Data security'] },
    ],
    'catering-craft-practice': [
        { title: 'Introduction to Catering', subtopics: ['Scope of the catering industry', 'Types of catering establishments', 'Career opportunities'] },
        { title: 'Food Production', subtopics: ['Food commodities', 'Methods of cooking', 'Menu planning', 'Kitchen equipment and utensils'] },
        { title: 'Food Service', subtopics: ['Types of food service', 'Table setting and service', 'Beverage service'] },
        { title: 'Hygiene and Safety', subtopics: ['Personal hygiene', 'Food hygiene', 'Kitchen safety', 'Waste management'] },
    ],
    'computer-studies': [
        { title: 'Introduction to Computers', subtopics: ['History and generations of computers', 'Types of computers', 'Components of a computer system', 'Input and output devices'] },
        { title: 'Software', subtopics: ['System software', 'Application software', 'Programming concepts', 'Word processing and spreadsheets'] },
        { title: 'Networking and Communication', subtopics: ['Computer networks', 'Internet and email', 'Network topologies', 'Cybersecurity basics'] },
        { title: 'Data Representation', subtopics: ['Number systems (binary, octal, hexadecimal)', 'Data types', 'Character coding systems (ASCII, EBCDIC)'] },
    ],
    'marketing': [
        { title: 'Basic Concepts of Marketing', subtopics: ['Definition and importance of marketing', 'Marketing concepts and orientation', 'Market segmentation', 'Marketing mix (4Ps)'] },
        { title: 'Product and Pricing', subtopics: ['Product development and life cycle', 'Branding and packaging', 'Pricing strategies', 'Distribution channels'] },
        { title: 'Promotion and Advertising', subtopics: ['Sales promotion', 'Advertising media', 'Personal selling', 'Public relations'] },
        { title: 'Consumer Behaviour', subtopics: ['Factors influencing buying decisions', 'Consumer rights', 'Market research'] },
    ],
    'physical-education': [
        { title: 'Introduction to Physical Education', subtopics: ['Meaning and objectives of physical education', 'History of physical education', 'Career opportunities'] },
        { title: 'Human Anatomy and Physiology', subtopics: ['Skeletal system', 'Muscular system', 'Circulatory system', 'Respiratory system'] },
        { title: 'Health Education', subtopics: ['Personal hygiene', 'Communicable and non-communicable diseases', 'First aid', 'Drug abuse'] },
        { title: 'Sports and Games', subtopics: ['Track and field events', 'Ball games', 'Gymnastics', 'Swimming', 'Rules and regulations of sports'] },
    ],
    'office-practice': [
        { title: 'The Office', subtopics: ['Types of office', 'Office layout and organization', 'Office equipment and machines', 'Filing and indexing systems'] },
        { title: 'Office Communication', subtopics: ['Types of communication', 'Correspondence', 'Telephone etiquette', 'Mail handling'] },
        { title: 'Office Personnel', subtopics: ['Roles and responsibilities', 'Qualities of office staff', 'Training and development', 'Office ethics'] },
    ],
    'technical-drawing': [
        { title: 'Drawing Instruments and Equipment', subtopics: ['Types of drawing instruments', 'Care and use of instruments', 'Lettering and dimensioning'] },
        { title: 'Geometric Construction', subtopics: ['Lines, angles and polygons', 'Tangent construction', 'Loci and engineering curves'] },
        { title: 'Projections', subtopics: ['Orthographic projection', 'Isometric projection', 'Oblique projection', 'Perspective drawing'] },
        { title: 'Building and Machine Drawing', subtopics: ['Building plans and elevations', 'Sectional views', 'Assembly drawings', 'Working drawings'] },
    ],
    'food-and-nutrition': [
        { title: 'Food Science', subtopics: ['Classification of food nutrients', 'Functions of food nutrients', 'Sources of nutrients', 'Effects of heat on nutrients'] },
        { title: 'Meal Planning', subtopics: ['Principles of meal planning', 'Meal planning for different groups', 'Menu types', 'Table setting'] },
        { title: 'Food Preservation', subtopics: ['Methods of food preservation', 'Causes of food spoilage', 'Food additives', 'Food safety and hygiene'] },
        { title: 'Diet and Health', subtopics: ['Balanced diet', 'Nutritional deficiency diseases', 'Diet-related diseases', 'Special diets'] },
    ],
    'home-management': [
        { title: 'The Family', subtopics: ['Types of family', 'Family resources', 'Family goals and values', 'Time management'] },
        { title: 'Consumer Education', subtopics: ['Consumer rights and responsibilities', 'Buying practices', 'Consumer protection agencies'] },
        { title: 'Housing and Home Furnishing', subtopics: ['Types of housing', 'Factors affecting choice of housing', 'Furniture selection', 'Interior decoration'] },
        { title: 'Household Equipment', subtopics: ['Types of household equipment', 'Selection and care of equipment', 'Safety in the home'] },
    ],
}

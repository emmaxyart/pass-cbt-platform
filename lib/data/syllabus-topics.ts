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
        // TOPIC 1
        {
            section: 'Topic 1: Separation of Mixtures and Purification of Chemical Substances',
            title: 'Pure and Impure Substances',
            subtopics: [
                'Pure and impure substances',
                'Boiling and melting points as criteria for purity',
                'Elements, compounds and mixtures',
                'Chemical and physical changes',
                'Separation processes: evaporation, simple and fractional distillation, sublimation, filtration, crystallization, paper and column chromatography, simple and fractional crystallization, magnetization, decantation',
            ],
            objectives: [
                'Distinguish between pure and impure substances',
                'Use boiling and melting points as criteria for purity of chemical substances',
                'Distinguish between elements, compounds and mixtures',
                'Differentiate between chemical and physical changes',
                'Identify the properties of the components of a mixture',
                'Specify the principle involved in each separation method',
                'Apply the basic principle of separation processes in everyday life',
            ],
        },
        // TOPIC 2
        {
            section: 'Topic 2: Chemical Combination',
            title: 'Stoichiometry and Chemical Laws',
            subtopics: [
                'Stoichiometry',
                'Laws of definite and multiple proportions',
                'Law of conservation of matter',
                'Gay-Lussac\'s law of combining volumes',
                'Avogadro\'s law',
                'Chemical symbols, formulae, equations and their uses',
                'Relative atomic mass based on ¹²C = 12',
                'The mole concept and Avogadro\'s number',
            ],
            objectives: [
                'Perform simple calculations involving formulae, equations/chemical composition and the mole concept',
                'Deduce the chemical laws from given expressions/statements/data',
                'Interpret graphical representations related to these laws',
                'Deduce the stoichiometry of chemical reactions',
            ],
        },
        // TOPIC 3
        {
            section: 'Topic 3: Kinetic Theory of Matter and Gas Laws',
            title: 'Kinetic Theory and States of Matter',
            subtopics: [
                'Outline of the kinetic theory of matter',
                'Melting, vaporization, boiling, freezing, condensation in terms of molecular motion and Brownian movement',
                'Laws of Boyle, Charles, Graham and Dalton (law of partial pressure)',
                'Combined gas law, molar volume and atomicity of gases',
                'The ideal gas equation (PV = nRT)',
                'Relationship between vapour density of gases and relative molecular mass',
            ],
            objectives: [
                'Apply the theory to distinguish between solids, liquids and gases',
                'Deduce reasons for change of state',
                'Draw inferences based on molecular motion',
                'Deduce gas laws from given expressions/statements',
                'Interpret graphical representations related to these laws',
                'Perform simple calculations based on these laws, equations and relationships',
            ],
        },
        // TOPIC 4
        {
            section: 'Topic 4: Atomic Structure and Bonding',
            title: 'Atomic Structure',
            subtopics: [
                'Concept of atoms, molecules and ions; works of Dalton, Millikan, Rutherford, Moseley, Thompson and Bohr',
                'Atomic structure, electron configuration, atomic number, mass number and isotopes (elements Z=1 to 20)',
                'Shapes of s and p orbitals',
            ],
            objectives: [
                'Distinguish between atoms, molecules and ions',
                'Identify the contributions of scientists to the development of atomic structure',
                'Deduce the number of protons, neutrons and electrons from atomic and mass numbers',
                'Apply the rules guiding the arrangement of electrons in an atom',
                'Identify common elements exhibiting isotopy',
                'Relate isotopy to mass number and perform simple calculations relating to isotopy',
                'Differentiate between the shapes of the orbitals and determine electron counts in s and p orbitals',
            ],
        },
        {
            section: 'Topic 4: Atomic Structure and Bonding',
            title: 'Periodic Table and Periodicity',
            subtopics: [
                'The periodic table and periodicity of elements',
                'Families of elements: alkali metals, halogens, noble gases, transition metals',
                'Variation of ionization energy, ionic radii, electron affinity and electronegativity',
            ],
            objectives: [
                'Relate atomic number to the position of an element on the periodic table',
                'Relate properties of groups of elements on the periodic table',
                'Identify reasons for variation in properties across the period and down the groups',
            ],
        },
        {
            section: 'Topic 4: Atomic Structure and Bonding',
            title: 'Chemical Bonding and Nuclear Chemistry',
            subtopics: [
                'Electrovalency and covalency; tendency to attain noble gas structure',
                'Hydrogen bonding and metallic bonding',
                'Coordinate bond; van der Waals\' forces',
                'Shapes of simple molecules: linear (H₂, O₂, Cl₂, HCl, CO₂), non-linear (H₂O), tetrahedral (CH₄), pyramidal (NH₃)',
                'Radioactivity — types and properties of radiations',
                'Nuclear reactions: simple equations, uses and applications of natural and artificial radioactivity',
            ],
            objectives: [
                'Differentiate between the different types of bonding',
                'Deduce bond types based on electron configurations',
                'Relate the nature of bonding to properties of compounds',
                'Differentiate between the various shapes of molecules',
                'Distinguish between ordinary chemical reaction and nuclear reaction',
                'Differentiate between natural and artificial radioactivity',
                'Compare the properties of the different types of nuclear radiations',
                'Compute simple calculations on the half-life of a radioactive material',
                'Balance simple nuclear equations and identify various applications of radioactivity',
            ],
        },
        // TOPIC 5
        {
            section: 'Topic 5: Air',
            title: 'Composition and Uses of Air',
            subtopics: [
                'Natural gaseous constituents: nitrogen, oxygen, water vapour, carbon (IV) oxide, noble gases (argon, neon)',
                'Air as a mixture',
                'Some uses of the noble gases',
            ],
            objectives: [
                'Deduce reason(s) for the existence of air as a mixture',
                'Identify the principle involved in the separation of air components',
                'Deduce reasons for the variation in the composition of air in the environment',
                'Specify the uses of some of the constituents of air',
            ],
        },
        // TOPIC 6
        {
            section: 'Topic 6: Water',
            title: 'Properties and Treatment of Water',
            subtopics: [
                'Water as a product of the combustion of hydrogen; composition by volume',
                'Water as a solvent; atmospheric gases dissolved in water and their biological significance',
                'Hard and soft water: temporary and permanent hardness; methods of softening',
                'Treatment of water for town supply',
                'Water of crystallization, efflorescence, deliquescence and hygroscopy; examples and uses',
            ],
            objectives: [
                'Identify the various uses of water',
                'Identify the effects of dissolved atmospheric gases in water',
                'Distinguish between the properties of hard and soft water',
                'Determine the causes of hardness and identify methods of removal',
                'Describe the processes involved in the treatment of water for town supply',
                'Distinguish between efflorescence, deliquescence and hygroscopy',
                'Identify the various compounds that exhibit these phenomena',
            ],
        },
        // TOPIC 7
        {
            section: 'Topic 7: Solubility',
            title: 'Solutions and Colloids',
            subtopics: [
                'Unsaturated, saturated and supersaturated solutions; solubility curves; simple calculations (mol/dm³)',
                'Solvents for fats, oils and paints; removal of stains',
                'Suspensions and colloids: properties and examples',
                'Harmattan haze and water paints as suspensions; fog, milk, aerosol spray, emulsion paints and rubber solution as colloids',
            ],
            objectives: [
                'Distinguish between the different types of solutions',
                'Interpret solubility curves',
                'Calculate the amount of solute that can dissolve in a given amount of solvent at a given temperature',
                'Deduce that solubility is temperature-dependent',
                'Relate nature of solvents to their uses',
                'Differentiate among true solution, suspension and colloids',
                'Compare the properties of a true solution and a false solution',
                'Provide typical examples of suspensions and colloids',
            ],
        },
        // TOPIC 8
        {
            section: 'Topic 8: Environmental Pollution',
            title: 'Pollutants and Their Effects',
            subtopics: [
                'Sources and effects of pollutants',
                'Air pollution: H₂S, CO, SO₂, oxides of nitrogen, chlorofluorocarbons, dust',
                'Water pollution: sewage and oil pollution',
                'Soil pollution: oil spillage, biodegradable and non-biodegradable pollutants',
            ],
            objectives: [
                'Identify the different types of pollution and pollutants',
                'Specify different sources of pollutants',
                'Classify pollutants as biodegradable and non-biodegradable',
                'Specify the effects of pollution on the environment',
                'Identify measures for control of environmental pollution',
            ],
        },
        // TOPIC 9
        {
            section: 'Topic 9: Acids, Bases and Salts',
            title: 'Properties, pH and Titration',
            subtopics: [
                'General characteristics and properties of acids, bases and salts; acid/base indicators; basicity of acids',
                'Normal, acidic, basic and double salts; alums as examples of double salts',
                'Naturally occurring organic acids: ethanoic, citric and tartaric acids',
                'Preparation of salts: neutralization, precipitation, action of acids on metals, oxides and trioxocarbonate(IV) salts',
                'Qualitative comparison of conductances of molar solutions of strong and weak acids and bases',
                'pH and pOH scale; simple calculations',
                'Acid/base titrations',
                'Hydrolysis of salts: NH₄Cl, AlCl₃, Na₂CO₃ and CH₃COONa',
            ],
            objectives: [
                'Distinguish between the properties of acids and bases',
                'Identify the different types of acids and bases and determine basicity of acids',
                'Differentiate between acidity and alkalinity using acid/base indicators',
                'Identify the various methods of preparation of salts and classify different types',
                'Relate degree of dissociation to strength of acids/bases and conductance',
                'Perform simple calculations on pH and pOH',
                'Identify the appropriate acid-base indicator and interpret graphical representation of titration curves',
                'Perform simple calculations based on the mole concept',
                'Balance equations for the hydrolysis of salts and deduce the properties of the resultant solution',
            ],
        },
        // TOPIC 10
        {
            section: 'Topic 10: Oxidation and Reduction',
            title: 'Redox Reactions and Oxidation Numbers',
            subtopics: [
                'Oxidation as addition of oxygen or removal of hydrogen',
                'Reduction as removal of oxygen or addition of hydrogen',
                'Oxidation and reduction in terms of electron transfer',
                'Use of oxidation numbers; balancing simple equations',
                'IUPAC nomenclature of inorganic compounds using oxidation number',
                'Tests for oxidizing and reducing agents',
            ],
            objectives: [
                'Identify the various forms of expressing oxidation and reduction',
                'Classify chemical reactions in terms of oxidation or reduction',
                'Balance redox reaction equations',
                'Deduce the oxidation number of chemical species',
                'Compute the number of electron transfer in redox reactions',
                'Identify the name of redox species in a reaction',
                'Distinguish between oxidizing and reducing agents in redox reactions',
                'Apply oxidation number in naming inorganic compounds',
                'Relate reagents to their oxidizing and reducing abilities',
            ],
        },
        // TOPIC 11
        {
            section: 'Topic 11: Electrolysis',
            title: 'Electrolysis and Electrochemical Cells',
            subtopics: [
                'Electrolytes and non-electrolytes; Faraday\'s laws of electrolysis',
                'Electrolysis of dilute H₂SO₄, aqueous CuSO₄, CuCl₂, dilute and concentrated NaCl solutions and fused NaCl',
                'Factors affecting discharge of ions at the electrodes',
                'Uses of electrolysis: purification of copper, production of Al, Na, O₂, Cl₂ and NaOH',
                'Electrochemical cells: Redox series, half-cell reactions and electrode potentials',
                'Corrosion as an electrolytic process; cathodic protection, painting, electroplating and coating',
            ],
            objectives: [
                'Distinguish between electrolytes and non-electrolytes',
                'Perform calculations based on Faraday as a mole of electrons',
                'Identify suitable electrodes for different electrolytes',
                'Specify the chemical reactions at the electrodes and determine the products',
                'Identify the factors that affect the products of electrolysis',
                'Specify the different areas of application of electrolysis',
                'Identify the various electrochemical cells and calculate electrode potentials using half-cell reaction equations',
                'Identify methods used in protecting metals from corrosion',
            ],
        },
        // TOPIC 12
        {
            section: 'Topic 12: Energy Changes',
            title: 'Thermochemistry, Entropy and Spontaneity',
            subtopics: [
                'Energy changes (ΔH) in physical and chemical changes; dissolution of Na, NaOH, K, NH₄Cl in water',
                'Endothermic (+ΔH) and exothermic (−ΔH) reactions',
                'Entropy as an order-disorder phenomenon; mixing of gases and dissolution of salts',
                'Spontaneity of reactions: ΔG⁰ = 0 as criterion for equilibrium; conditions for non-spontaneity or spontaneity',
            ],
            objectives: [
                'Determine the types of heat changes ΔH in physical and chemical processes',
                'Interpret graphical representations of heat changes',
                'Relate the physical state of a substance to the degree of orderliness',
                'Determine the conditions for spontaneity of a reaction',
                'Relate ΔH⁰, ΔS⁰ and ΔG⁰ as the driving forces for chemical reactions',
                'Solve simple problems based on the relationship ΔG⁰ = ΔH⁰ − TΔS⁰',
            ],
        },
        // TOPIC 13
        {
            section: 'Topic 13: Rates of Chemical Reaction',
            title: 'Factors Affecting Reaction Rates',
            subtopics: [
                'Effect of temperature (e.g. HCl and Na₂S₂O₃ or Mg and HCl)',
                'Effect of concentration/pressure (e.g. HCl and Na₂S₂O₃, HCl and marble, iodine clock reaction)',
                'Effect of surface area (marble and HCl — powdered vs lumps)',
                'Effect of catalyst (decomposition of H₂O₂ or KClO₃ with MnO₂)',
                'Reaction rate curves',
                'Activation energy; qualitative treatment of Arrhenius\' law and collision theory',
                'Effect of light on reactions (e.g. halogenation of alkanes)',
            ],
            objectives: [
                'Identify the factors that affect the rates of a chemical reaction',
                'Determine the effects of temperature on the rate of reactions',
                'Examine the effect of concentration/pressure on the rate of a chemical reaction',
                'Describe how the rate is affected by surface area',
                'Determine types of catalysts and their effects; identify ways of moderating these effects',
                'Interpret reaction rate curves',
                'Solve simple problems on the rate of reactions',
                'Relate the rate of reaction to the kinetic theory of matter',
                'Examine the significance of activation energy to chemical reactions',
                'Deduce the value of activation energy (Ea) from reaction rate curves',
            ],
        },
        // TOPIC 14
        {
            section: 'Topic 14: Chemical Equilibrium',
            title: 'Dynamic Equilibrium and Le Chatelier\'s Principle',
            subtopics: [
                'Reversible reactions and factors governing equilibrium position',
                'Dynamic equilibrium',
                'Le Chatelier\'s principle and equilibrium constant',
                'Examples: action of steam on iron; N₂O₄ ⇌ 2NO₂',
            ],
            objectives: [
                'Identify the factors that affect the position of equilibrium',
                'Predict the effects of each factor on the position of equilibrium',
                'Determine the effects of these factors on equilibrium constant',
            ],
        },
        // TOPIC 15
        {
            section: 'Topic 15: Non-metals and Their Compounds',
            title: 'Hydrogen and Halogens',
            subtopics: [
                'Hydrogen: commercial production, laboratory preparation, properties, uses and test',
                'Chlorine: laboratory and industrial preparation (electrolysis), properties and uses (water sterilization, bleaching, HCl manufacture, plastics, insecticides)',
                'Hydrogen chloride and hydrochloric acid: preparation, properties; chlorides and test for chlorides',
            ],
            objectives: [
                'Predict reagents for laboratory and industrial preparation of these gases and their compounds',
                'Identify and compare the properties and uses of the gases and their compounds',
                'Determine the specific test for each gas and its compounds',
                'Determine specific tests for Cl⁻, SO₄²⁻, SO₃²⁻, S²⁻, NH₄⁺, NO₃⁻, CO₃²⁻, HCO₃⁻',
            ],
        },
        {
            section: 'Topic 15: Non-metals and Their Compounds',
            title: 'Oxygen, Sulphur and Nitrogen',
            subtopics: [
                'Oxygen: laboratory preparation, properties, uses; commercial production from liquid air',
                'Oxides: acidic, basic, amphoteric and neutral; ozone as an allotrope and its importance',
                'Sulphur: allotropes; SO₂, H₂S; tetraoxosulphate(VI) acid (contact process), properties and uses; test for SO₄²⁻',
                'Nitrogen: laboratory and industrial (Haber process) preparation of NH₃; properties and uses; ammonium salts; oxidation of NH₃ to HNO₃',
                'HNO₃: laboratory preparation, properties, uses; trioxonitrate(V) salts — action of heat; test for NO₃⁻',
                'Oxides of nitrogen: properties; the nitrogen cycle',
            ],
            objectives: [
                'Classify oxides and identify properties; determine significance of ozone to the environment',
                'Identify allotropes of sulphur and their uses; predict reagents for preparation of SO₂ and H₂S',
                'Specify preparations of H₂SO₄ and H₂SO₃, their properties and uses',
                'Specify the laboratory and industrial preparation of NH₃; identify its properties and uses',
                'Identify reagents for laboratory preparation of HNO₃, its properties and uses',
                'Specify the properties of N₂O, NO and NO₂ gases; examine the relevance of the nitrogen cycle',
            ],
        },
        {
            section: 'Topic 15: Non-metals and Their Compounds',
            title: 'Carbon',
            subtopics: [
                'Allotropes of carbon: uses and properties',
                'Carbon(IV) oxide: laboratory preparation, properties, uses; action of heat on trioxocarbonate(IV) salts; test for CO₃²⁻',
                'Carbon(II) oxide: laboratory preparation, properties, effects on blood; sources (charcoal, fire, exhaust fumes)',
                'Coal: types; products of destructive distillation of wood and coal',
                'Coke: classification, uses; manufacture and uses of synthetic gas',
            ],
            objectives: [
                'Identify allotropes of carbon',
                'Predict reagents for laboratory preparation of CO₂; specify its properties and uses',
                'Determine reagents for laboratory preparation of CO; predict effects of CO on humans',
                'Identify the different forms of coal and their uses',
                'Specify the products of destructive distillation of wood and coal',
                'Specify the uses of coke and synthetic gas',
            ],
        },
        // TOPIC 16
        {
            section: 'Topic 16: Metals and Their Compounds',
            title: 'Alkali Metals, Alkaline-Earth Metals and Aluminium',
            subtopics: [
                'General properties of metals',
                'Sodium hydroxide: production by electrolysis of brine; action on Al, Zn and Pb ions; uses including precipitation of metallic hydroxides',
                'Na₂CO₃ and NaHCO₃: production by Solvay process, properties and uses',
                'Sodium chloride: occurrence in sea water, uses and economic importance',
                'Calcium: calcium oxide, calcium hydroxide and calcium trioxocarbonate(IV); properties and uses; test for Ca²⁺',
                'Aluminium: purification of bauxite, electrolytic extraction, properties and uses; test for Al³⁺',
            ],
            objectives: [
                'Specify the general properties of metals',
                'Determine the method of extraction suitable for each metal and relate it to properties',
                'Compare the chemical reactivities of the metals and their compounds',
                'Specify the uses of the metals and determine specific tests for metallic ions',
                'Determine the process for the production of the compounds of these metals',
                'Specify the chemical composition of cement and describe the method of purification of bauxite',
            ],
        },
        {
            section: 'Topic 16: Metals and Their Compounds',
            title: 'Tin, Transition Metals, Iron, Copper and Alloys',
            subtopics: [
                'Tin: extraction from ores, properties and uses',
                'First transition series: electron configuration, oxidation states, complex ion formation, coloured ions, catalysis',
                'Iron: extraction from sulphide and oxide ores; properties and uses; different forms of iron; test for Fe²⁺ and Fe³⁺',
                'Copper: extraction from sulphide and oxide ores; properties and uses; preparation and uses of CuSO₄; test for Cu²⁺',
                'Alloys: steel, stainless steel, brass, bronze, type-metal, duralumin, soft solder, permalloy and alnico (constituents and uses)',
            ],
            objectives: [
                'Specify the ores of tin, relate extraction method to its properties and specify its uses',
                'Identify the general properties of the first transition metals and deduce reasons for their specific properties',
                'Determine the IUPAC names of simple transition metal complexes',
                'Specify the properties, uses and different forms of iron; identify appropriate extraction method',
                'Identify the appropriate method of extraction of copper; relate properties of copper to its uses',
                'Specify the method for preparation of CuSO₄',
                'Specify the constituents and uses of various alloys and compare alloys to pure metals',
            ],
        },
        // TOPIC 17
        {
            section: 'Topic 17: Organic Compounds',
            title: 'Hydrocarbons (Alkanes, Alkenes, Alkynes and Benzene)',
            subtopics: [
                'Tetravalency of carbon; IUPAC nomenclature; determination of empirical formula',
                'Alkanes: homologous series, substitution reactions, isomerism (structural, up to 6 carbons)',
                'Petroleum: composition, fractional distillation, cracking, reforming, octane number',
                'Alkenes: structural and geometric isomerism; addition and polymerization reactions; polythene and synthetic rubber; vulcanization',
                'Alkynes: ethyne — production from carbides, simple reactions and properties',
                'Aromatic hydrocarbons: benzene — structure, properties and uses',
            ],
            objectives: [
                'Derive the name of organic compounds from their general formulae and relate name to structure',
                'Relate the tetravalency of carbon to catenation',
                'Classify compounds according to their functional groups; derive empirical and molecular formula',
                'Derive various isomeric forms and distinguish between types of isomerism',
                'Specify the uses of various hydrocarbons and identify crude oil as a complex mixture',
                'Relate fractions of hydrocarbons to their properties and uses',
                'Distinguish between various polymerization processes; specify the process involved in vulcanization',
                'Distinguish between aliphatic and aromatic hydrocarbons; relate properties of benzene to its structure',
            ],
        },
        {
            section: 'Topic 17: Organic Compounds',
            title: 'Alkanols, Alkanals, Alkanones and Alkanoic Acids',
            subtopics: [
                'Alkanols: primary, secondary, tertiary; production of ethanol by fermentation and from petroleum; glycerol as a polyhydric alkanol',
                'Lucas test: oxidation as a distinguishing test among primary, secondary and tertiary alkanols',
                'Alkanals and alkanones: chemical tests to distinguish between them',
                'Alkanoic acids: neutralization and esterification; dicarboxylic acids (ethanedioic/oxalic acid); aromatic acid (benzene carboxylic acid)',
            ],
            objectives: [
                'Compare the various classes of alkanols; determine the processes involved in ethanol production',
                'Examine the importance of ethanol as an alternative energy provider',
                'Distinguish the various classes of alkanols using Lucas test',
                'Differentiate between alkanals and alkanones',
                'Compare the various types of alkanoic acids',
            ],
        },
        {
            section: 'Topic 17: Organic Compounds',
            title: 'Alkanoates, Amines, Carbohydrates, Proteins and Polymers',
            subtopics: [
                'Alkanoates: formation from alkanoic acids and alkanols; fats and oils as alkanoates',
                'Saponification: production of soap and margarine; distinction between detergents and soaps',
                'Amines (Alkanamines): primary, secondary and tertiary',
                'Carbohydrates: mono-, di- and polysaccharides; composition; chemical tests; hydrolysis; uses in beverages, pharmaceuticals and textiles',
                'Proteins: primary structures; hydrolysis; tests (Ninhydrin, Biuret, Millon\'s, xanthoproteic); enzymes and functions',
                'Polymers: natural and synthetic rubber; addition and condensation polymerization; thermoplastic and thermosetting plastics',
            ],
            objectives: [
                'Identify natural sources of alkanoates; specify methods for production of soap, detergent and margarine; distinguish between detergent and soap',
                'Compare the various classes of alkanamine',
                'Identify natural sources of carbohydrates; compare classes; infer products of hydrolysis; determine uses; specify tests for simple sugars',
                'Identify the basic structure of proteins; specify methods and products of hydrolysis; specify various tests for proteins',
                'Distinguish between natural and synthetic polymers',
                'Differentiate between addition and condensation polymerization; classify natural and commercial polymers and their uses',
                'Distinguish between thermoplastics and thermosetting plastics',
            ],
        },
        // TOPIC 18
        {
            section: 'Topic 18: Chemistry and Industry',
            title: 'Chemical Industries and Biotechnology',
            subtopics: [
                'Chemical industries: types, raw materials and relevance',
                'Biotechnology',
            ],
            objectives: [
                'Classify chemical industries in terms of products',
                'Identify raw materials for each industry',
                'Distinguish between fine and heavy chemicals',
                'Enumerate the relevance of each of these industries',
                'Relate industrial processes to biotechnology',
            ],
        },
    ],
    'physics': [
        // TOPIC 1
        {
            section: 'Topic 1: Measurements and Units',
            title: 'Length, Mass, Time and Fundamental Quantities',
            subtopics: [
                'Length, area and volume: metre rule, vernier calipers, micrometer screw-gauge, measuring cylinder',
                'Mass: unit of mass, use of simple beam balance, concept of beam balance',
                'Time: unit of time, time-measuring devices',
                'Fundamental physical quantities',
                'Derived physical quantities and their units; combinations of fundamental quantities',
                'Dimensions: definition and simple examples',
                'Limitations of experimental measurements: accuracy, simple estimation of errors, significant figures, standard form',
                'Measurement, position, distance and displacement: concept of displacement, distinction between distance and displacement, concept of position and coordinates, frame of reference',
            ],
            objectives: [
                'Identify the units of length, area and volume; use different measuring instruments',
                'Determine the lengths, surface areas and volume of regular and irregular bodies',
                'Identify the unit of mass; use simple beam balance (e.g. Buchart\'s balance and chemical balance)',
                'Identify the unit of time; use different time-measuring devices',
                'Relate the fundamental physical quantities to their units; deduce the units of derived physical quantities',
                'Determine the dimensions of physical quantities; use dimensions to determine units and test homogeneity of an equation',
                'Determine the accuracy of measuring instruments; estimate simple errors; express measurements in standard form',
                'Use strings, metre ruler, engineering calipers, vernier calipers and micrometer screw gauge; note the degree of accuracy',
                'Identify distance travelled in a specified direction; use compass and protractor to locate points/directions',
                'Use Cartesian systems to locate positions in the x-y plane; plot graphs and draw inferences',
            ],
        },
        // TOPIC 2
        {
            section: 'Topic 2: Scalars and Vectors',
            title: 'Scalar and Vector Quantities',
            subtopics: [
                'Definition of scalar and vector quantities',
                'Examples of scalar and vector quantities',
                'Relative velocity',
                'Resolution of vectors into two perpendicular directions including graphical methods of solution',
            ],
            objectives: [
                'Distinguish between scalar and vector quantities; give examples of each',
                'Determine the resultant of two or more vectors',
                'Determine relative velocity',
                'Resolve vectors into two perpendicular components',
                'Use graphical methods to solve vector problems',
            ],
        },
        // TOPIC 3
        {
            section: 'Topic 3: Motion',
            title: 'Linear Motion, Projectiles and Newton\'s Laws',
            subtopics: [
                'Types of motion: translational, oscillatory, rotational, spin and random',
                'Relative motion; causes of motion',
                'Types of force: contact and force field',
                'Linear motion: speed, velocity and acceleration; equations of uniformly accelerated motion; motion under gravity; distance-time and velocity-time graphs; instantaneous velocity and acceleration',
                'Projectiles: range, maximum height and time of flight; applications',
                'Newton\'s laws of motion: inertia, mass and force; mass-acceleration relationship; impulse and momentum; force-time graph; conservation of linear momentum',
            ],
            objectives: [
                'Identify different types of motion; solve numerical problems on collinear motion',
                'Identify force as the cause of motion; identify push, pull, electric, magnetic and gravitational forces',
                'Differentiate between speed, velocity and acceleration',
                'Deduce equations of uniformly accelerated motion; solve problems of motion under gravity',
                'Interpret distance-time and velocity-time graphs; compute instantaneous velocity and acceleration',
                'Establish expressions for range, maximum height and time of flight of projectiles; solve projectile problems',
                'Solve numerical problems involving impulse and momentum; interpret area under force-time graph',
                'Interpret Newton\'s laws of motion; compare inertia, mass and force; deduce the mass-acceleration relationship',
                'Interpret the law of conservation of linear momentum and its applications',
            ],
        },
        {
            section: 'Topic 3: Motion',
            title: 'Circular Motion and Simple Harmonic Motion (S.H.M)',
            subtopics: [
                'Motion in a circle: angular velocity and angular acceleration; centripetal and centrifugal forces; applications',
                'S.H.M: definition and explanation; examples of systems that execute S.H.M',
                'Period, frequency and amplitude of S.H.M',
                'Velocity and acceleration of S.H.M',
                'Simple treatment of energy change in S.H.M',
                'Forced vibration and resonance (simple treatment)',
            ],
            objectives: [
                'Establish expression for angular velocity, angular acceleration and centripetal force',
                'Solve numerical problems involving motion in a circle',
                'Establish the relationship between period and frequency',
                'Analyse the energy changes occurring during S.H.M',
                'Identify different types of forced vibration; enumerate applications of resonance',
            ],
        },
        // TOPIC 4
        {
            section: 'Topic 4: Gravitational Field',
            title: 'Gravitation, Weight and Orbital Motion',
            subtopics: [
                'Newton\'s law of universal gravitation',
                'Gravitational potential',
                'Conservative and non-conservative fields',
                'Acceleration due to gravity; variation of g on the earth\'s surface',
                'Distinction between mass and weight; escape velocity',
                'Parking orbit and weightlessness',
            ],
            objectives: [
                'Identify the expression for gravitational force between two bodies',
                'Apply Newton\'s law of universal gravitation',
                'Give examples of conservative and non-conservative fields',
                'Deduce the expression for gravitational field potentials',
                'Identify the causes of variation of g on the earth\'s surface',
                'Differentiate between mass and weight; determine escape velocity',
            ],
        },
        // TOPIC 5
        {
            section: 'Topic 5: Equilibrium of Forces',
            title: 'Force Equilibrium, Moments and Stability',
            subtopics: [
                'Equilibrium of particles: equilibrium of coplanar forces; triangle and polygon of forces; Lami\'s theorem',
                'Principles of moments: moment of a force; moment of a couple (torque); applications',
                'Conditions for equilibrium of rigid bodies under parallel and non-parallel forces',
                'Resolution and composition of forces in two perpendicular directions; resultant and equilibrant',
                'Centre of gravity and stability: stable, unstable and neutral equilibrium',
            ],
            objectives: [
                'Apply the conditions for the equilibrium of coplanar forces to solve problems',
                'Use triangle and polygon laws of forces; use Lami\'s theorem to solve problems',
                'Analyse the principle of moment of a force; determine moment of a force and couple',
                'Apply the conditions for equilibrium of rigid bodies to solve problems',
                'Resolve forces into two perpendicular directions; determine the resultant and equilibrant',
                'Differentiate between stable, unstable and neutral equilibrium',
            ],
        },
        // TOPIC 6
        {
            section: 'Topic 6: Work, Energy and Power',
            title: 'Work, Energy, Power and Energy in Society',
            subtopics: [
                'Definition of work, energy and power; forms of energy; conservation of energy',
                'Qualitative treatment of transformation between different forms of energy',
                'Interpretation of area under the force-distance curve',
                'Sources of energy: renewable and non-renewable (e.g. coal, crude oil)',
                'Energy and development; energy diversification',
                'Environmental impact of energy: global warming, greenhouse effect and spillage; energy crises',
                'Dams and energy production; nuclear energy',
                'Solar energy: solar collector and solar panel',
            ],
            objectives: [
                'Differentiate between work, energy and power; compare different forms of energy',
                'Apply the principle of conservation of energy; examine transformation between different forms',
                'Interpret the area under the force-distance curve; solve numerical problems on work, energy and power',
                'Itemize sources of energy; distinguish between renewable and non-renewable energy',
                'Identify methods of energy transition; explain the importance of energy in societal development',
                'Analyse the effect of energy use on the environment; identify energy sources friendly or hazardous to the environment',
                'Suggest ways of safe energy use; state different forms of energy conversion',
            ],
        },
        // TOPIC 7
        {
            section: 'Topic 7: Friction',
            title: 'Friction, Viscosity and Terminal Velocity',
            subtopics: [
                'Static and dynamic friction',
                'Coefficient of limiting friction and its determination',
                'Advantages and disadvantages of friction; reduction of friction',
                'Qualitative treatment of viscosity and terminal velocity',
                'Stoke\'s law',
            ],
            objectives: [
                'Differentiate between static and dynamic friction',
                'Determine the coefficient of limiting friction',
                'Compare the advantages and disadvantages of friction; suggest ways friction can be reduced',
                'Analyse factors that affect viscosity and terminal velocity',
                'Apply Stoke\'s law',
            ],
        },
        // TOPIC 8
        {
            section: 'Topic 8: Simple Machines',
            title: 'Types and Efficiency of Simple Machines',
            subtopics: [
                'Definition of simple machines',
                'Types of machines',
                'Mechanical advantage, velocity ratio and efficiency of machines',
            ],
            objectives: [
                'Identify different types of simple machines',
                'Solve problems involving simple machines',
            ],
        },
        // TOPIC 9
        {
            section: 'Topic 9: Elasticity',
            title: 'Hooke\'s Law, Young\'s Modulus and Elastic Strings',
            subtopics: [
                'Elastic limit, yield point, breaking point, Hooke\'s law and Young\'s modulus',
                'The spring balance as a device for measuring force',
                'Work done per unit volume in springs and elastic strings',
            ],
            objectives: [
                'Interpret force-extension curves',
                'Interpret Hooke\'s law and Young\'s modulus of a material',
                'Use spring balance to measure force',
                'Determine the work done in springs and elastic strings',
            ],
        },
        // TOPIC 10
        {
            section: 'Topic 10: Pressure',
            title: 'Atmospheric Pressure and Pressure in Liquids',
            subtopics: [
                'Atmospheric pressure: definition, SI units (Pa), measurement; simple mercury barometer, aneroid barometer and manometer',
                'Variation of pressure with height; use of barometer as an altimeter',
                'Pressure in liquids: relationship between pressure, depth and density (P = ρgh)',
                'Transmission of pressure in liquids (Pascal\'s Principle) and applications',
            ],
            objectives: [
                'Recognize the SI units of pressure (Pa); identify pressure measuring instruments',
                'Relate the variation of pressure to height; use a barometer as an altimeter',
                'Determine the relationship between pressure, depth and density',
                'Apply the principle of transmission of pressure in liquids to solve problems',
            ],
        },
        // TOPIC 11
        {
            section: 'Topic 11: Liquids at Rest',
            title: 'Density, Archimedes\' Principle and Floatation',
            subtopics: [
                'Determination of density of solids and liquids',
                'Definition of relative density',
                'Upthrust on a body immersed in a liquid',
                'Archimedes\' principle and law of floatation; applications (ships and hydrometers)',
            ],
            objectives: [
                'Distinguish between density and relative density of substances',
                'Determine the upthrust on a body immersed in a liquid',
                'Apply Archimedes\' principle and law of floatation to solve problems',
            ],
        },
        // TOPIC 12
        {
            section: 'Topic 12: Temperature and Its Measurement',
            title: 'Thermometry and Temperature Scales',
            subtopics: [
                'Concept of temperature; thermometric properties',
                'Calibration of thermometers',
                'Temperature scales: Celsius and Kelvin',
                'Types of thermometers',
                'Conversion from one scale of temperature to another',
            ],
            objectives: [
                'Identify thermometric properties of materials used for different thermometers',
                'Calibrate thermometers',
                'Differentiate between temperature scales (Celsius and Kelvin)',
                'Compare the types of thermometers',
                'Convert from one scale of temperature to another',
            ],
        },
        // TOPIC 13
        {
            section: 'Topic 13: Thermal Expansion',
            title: 'Expansion of Solids and Liquids',
            subtopics: [
                'Solids: linear, volume and area expansivities; effects and applications (expansion in building strips, railway lines); relationship between different expansivities',
                'Liquids: volume expansivity; real and apparent expansivities; determination of volume expansivity',
                'Anomalous expansion of water',
            ],
            objectives: [
                'Determine linear and volume expansivities; assess the effects and applications of thermal expansivities',
                'Determine the relationship between different expansivities',
                'Determine volume, apparent and real expansivities of liquids',
                'Analyse the anomalous expansion of water',
            ],
        },
        // TOPIC 14
        {
            section: 'Topic 14: Gas Laws',
            title: 'Gas Laws and the Ideal Gas Equation',
            subtopics: [
                'Boyle\'s law (isothermal process)',
                'Charles\' law (isobaric process)',
                'Pressure law (volumetric process)',
                'Absolute zero of temperature',
                'General gas equation (PV/T = constant)',
                'Ideal gas equation (PV = nRT)',
                'Van der Waals gas',
            ],
            objectives: [
                'Interpret the gas laws',
                'Use expressions of these laws to solve numerical problems',
                'Interpret the Van der Waals equation for one mole of a real gas',
            ],
        },
        // TOPIC 15
        {
            section: 'Topic 15: Quantity of Heat',
            title: 'Heat Capacity and Specific Heat Capacity',
            subtopics: [
                'Heat as a form of energy',
                'Definition of heat capacity and specific heat capacity of solids and liquids',
                'Determination by method of mixtures, electrical method and Newton\'s law of cooling',
            ],
            objectives: [
                'Differentiate between heat capacity and specific heat capacity',
                'Determine heat capacity and specific heat capacity using simple methods',
                'Solve numerical problems',
            ],
        },
        // TOPIC 16
        {
            section: 'Topic 16: Change of State',
            title: 'Latent Heat, Melting, Evaporation and Boiling',
            subtopics: [
                'Latent heat; specific latent heats of fusion and vaporization',
                'Melting, evaporation and boiling',
                'Influence of pressure and dissolved substances on boiling and melting points',
                'Application in appliances',
            ],
            objectives: [
                'Differentiate between latent heat and specific latent heats of fusion and vaporization',
                'Differentiate between melting, evaporation and boiling',
                'Examine the effects of pressure and dissolved substances on boiling and melting points',
                'Solve numerical problems',
            ],
        },
        // TOPIC 17
        {
            section: 'Topic 17: Vapours',
            title: 'Saturated Vapour Pressure, Humidity and Hygrometry',
            subtopics: [
                'Unsaturated and saturated vapours',
                'Relationship between saturated vapour pressure (S.V.P) and boiling',
                'Determination of S.V.P by barometer tube method',
                'Formation of dew, mist, fog and rain',
                'Dew point, humidity and relative humidity',
                'Hygrometry: estimation of atmospheric humidity using wet and dry bulb hygrometers',
            ],
            objectives: [
                'Distinguish between saturated and unsaturated vapours',
                'Relate saturated vapour pressure to boiling point',
                'Determine S.V.P by barometer tube method',
                'Differentiate between dew point, humidity and relative humidity',
                'Estimate the humidity of the atmosphere using wet and dry bulb hygrometers',
                'Solve numerical problems',
            ],
        },
        // TOPIC 18
        {
            section: 'Topic 18: Structure of Matter and Kinetic Theory',
            title: 'Molecular Theory and Kinetic Theory',
            subtopics: [
                'Atoms and molecules; molecular theory: Brownian motion, diffusion, surface tension, capillarity, adhesion, cohesion and angles of contact',
                'Examples and applications of molecular theory',
                'Assumptions of the kinetic theory',
                'Using kinetic theory to explain pressure exerted by gas, Boyle\'s law, Charles\' law, melting, boiling, vaporization, change in temperature and evaporation',
            ],
            objectives: [
                'Differentiate between atoms and molecules',
                'Use molecular theory to explain Brownian motion, diffusion, surface tension, capillarity, adhesion, cohesion and angle of contact',
                'Examine the assumptions of kinetic theory',
                'Interpret kinetic theory: pressure exerted by gases, Boyle\'s law, Charles\' law, melting, boiling, vaporization, change in temperature and evaporation',
            ],
        },
        // TOPIC 19
        {
            section: 'Topic 19: Heat Transfer',
            title: 'Conduction, Convection, Radiation and Engines',
            subtopics: [
                'Conduction, convection and radiation as modes of heat transfer',
                'Temperature gradient, thermal conductivity and heat flux',
                'Effect of the nature of the surface on energy radiated and absorbed',
                'Conductivities of common materials',
                'The thermos flask; land and sea breeze',
                'Engines (internal combustion, jet engines, rockets)',
            ],
            objectives: [
                'Differentiate between conduction, convection and radiation as modes of heat transfer',
                'Solve problems on temperature gradient, thermal conductivity and heat flux',
                'Assess the effect of the nature of the surface on the energy radiated and absorbed',
                'Compare the conductivities of common materials',
                'Relate the component parts and working of the thermos flask',
                'Differentiate between land and sea breeze',
                'Analyse the principles of operating internal combustion engines, jet engines and rockets',
            ],
        },
        // TOPIC 20
        {
            section: 'Topic 20: Waves',
            title: 'Production, Propagation and Classification of Waves',
            subtopics: [
                'Wave motion; vibrating systems as sources of waves; waves as mode of energy transfer',
                'Distinction between particle motion and wave motion',
                'Relationship between frequency, wavelength and wave velocity (V = fλ)',
                'Phase difference, wave number and wave vector',
                'Progressive wave equation: Y = A sin 2π/λ(vt ± x)',
                'Types of waves: mechanical, electromagnetic; longitudinal and transverse; stationary and progressive',
                'Examples from springs, ropes, stretched strings and ripple tank',
            ],
            objectives: [
                'Interpret wave motion; identify vibrating systems as sources of waves',
                'Use waves as a mode of energy transfer; distinguish between particle motion and wave motion',
                'Relate frequency and wavelength to wave velocity',
                'Determine phase difference, wave number and wave vector',
                'Use the progressive wave equation to compute basic wave parameters',
                'Differentiate between mechanical and electromagnetic waves',
                'Differentiate between longitudinal and transverse waves; distinguish between stationary and progressive waves',
            ],
        },
        {
            section: 'Topic 20: Waves',
            title: 'Wave Characteristics: Reflection, Interference, Beats and Doppler Effect',
            subtopics: [
                'Reflection, refraction, diffraction and plane polarization',
                'Superposition of waves, e.g. interference',
                'Beats (beat frequency and uses)',
                'Doppler effect (qualitative treatment only)',
            ],
            objectives: [
                'Differentiate between reflection, refraction, diffraction and plane polarization of waves',
                'Analyse the principle of superposition of waves',
                'Solve numerical problems on waves',
                'Explain the phenomenon of beats, beat frequency and their uses',
                'Explain the Doppler effect of sound and applications',
            ],
        },
        // TOPIC 21
        {
            section: 'Topic 21: Propagation of Sound Waves',
            title: 'Sound Propagation, Speed and Echoes',
            subtopics: [
                'The necessity for a material medium',
                'Speed of sound in solids, liquids and air',
                'Reflection of sound: echoes, reverberation and their applications',
                'Disadvantages of echoes and reverberations',
            ],
            objectives: [
                'Determine the need for a material medium in the propagation of sound waves',
                'Compare the speed of sound in solids, liquids and air',
                'Relate the effects of temperature and pressure to the speed of sound in air',
                'Solve problems on echoes, reverberation and speed of sound',
                'Compare the disadvantages and advantages of echoes',
            ],
        },
        // TOPIC 22
        {
            section: 'Topic 22: Characteristics of Sound Waves',
            title: 'Sound Quality, Pitch, Resonance and Musical Instruments',
            subtopics: [
                'Noise and musical notes',
                'Quality, pitch, intensity and loudness; application to musical instruments',
                'Overtones produced by vibrating strings and air columns',
                'Acoustic examples of resonance',
                'Frequency of notes emitted by air columns in closed and open pipes',
            ],
            objectives: [
                'Differentiate between noise and musical notes',
                'Analyse quality, pitch, intensity and loudness of sound notes',
                'Evaluate the application of sound characteristics in the construction of musical instruments',
                'Identify overtones by vibrating strings and air columns',
                'Itemize acoustical examples of resonance',
                'Determine the frequencies of notes emitted by air columns in open and closed pipes',
            ],
        },
        // TOPIC 23
        {
            section: 'Topic 23: Light Energy',
            title: 'Sources of Light and Propagation',
            subtopics: [
                'Natural and artificial sources of light; luminous and non-luminous objects',
                'Speed, frequency and wavelength of light',
                'Formation of shadows and eclipse',
                'The pin-hole camera',
            ],
            objectives: [
                'Compare the natural and artificial sources of light',
                'Differentiate between luminous and non-luminous objects',
                'Relate the speed, frequency and wavelength of light',
                'Interpret the formation of shadows and eclipses',
                'Solve problems using the principle of operation of a pin-hole camera',
            ],
        },
        // TOPIC 24
        {
            section: 'Topic 24: Reflection of Light at Plane and Curved Surfaces',
            title: 'Reflection, Mirrors and Magnification',
            subtopics: [
                'Laws of reflection; applications of reflection of light',
                'Formation of images by plane, concave and convex mirrors; ray diagrams',
                'Mirror formula: 1/f = 1/u + 1/v',
                'Linear magnification',
                'Applications: periscope, kaleidoscope and sextant',
            ],
            objectives: [
                'Interpret the laws of reflection',
                'Illustrate the formation of images by plane, concave and convex mirrors',
                'Apply the mirror formula to solve optical problems',
                'Determine the linear magnification',
                'Apply the laws of reflection of light to the working of periscope, kaleidoscope and the sextant',
            ],
        },
        // TOPIC 25
        {
            section: 'Topic 25: Refraction of Light Through Plane and Curved Surfaces',
            title: 'Refraction, Total Internal Reflection and Lenses',
            subtopics: [
                'Explanation of refraction in terms of velocity of light in the media; laws of refraction',
                'Definition and determination of refractive index (Snell\'s law)',
                'Real and apparent depth; lateral displacement',
                'Critical angle and total internal reflection',
                'Glass prism: minimum deviation formula; types of lenses',
                'Lens formula: 1/f = 1/u + 1/v and Newton\'s formula (F² = ab)',
                'Magnification; applications: periscope, prism binoculars, optical fibre, mirage',
            ],
            objectives: [
                'Interpret the laws of refraction',
                'Determine the refractive index of glass and liquid using Snell\'s law',
                'Determine the refractive index using the principle of real and apparent depth',
                'Determine the conditions necessary for total internal reflection',
                'Examine the use of periscope, prism binoculars, optical fibre; apply principles of total internal reflection to mirage',
                'Use lens formula and ray diagrams to solve optical numerical problems',
                'Determine the magnification of an image',
                'Calculate the refractive index of a glass prism using the minimum deviation formula',
            ],
        },
        // TOPIC 26
        {
            section: 'Topic 26: Optical Instruments',
            title: 'Microscopes, Telescopes, Cameras and the Eye',
            subtopics: [
                'Principles of microscopes, telescopes, projectors, cameras and the human eye',
                'Power of a lens; angular magnification',
                'Near and far points',
                'Sight defects and their corrections',
            ],
            objectives: [
                'Apply the principles of operation of optical instruments to solve problems',
                'Distinguish between the human eye and cameras',
                'Calculate the power of a lens; evaluate angular magnification of optical instruments',
                'Determine the near and far points',
                'Detect sight defects and their corrections',
            ],
        },
        // TOPIC 27
        {
            section: 'Topic 27: Dispersion of Light, Colours and Electromagnetic Spectrum',
            title: 'Dispersion, Colour Mixing and the Electromagnetic Spectrum',
            subtopics: [
                'Dispersion of white light by a triangular prism; production of pure spectrum',
                'Colour mixing by addition and subtraction',
                'Colour of objects and colour filters',
                'Rainbow',
                'Electromagnetic spectrum: sources and uses of various types of radiation',
            ],
            objectives: [
                'Identify primary colours and obtain secondary colours by mixing',
                'Understand the formation of rainbow; deduce why objects have colours',
                'Analyse colours using colour filters',
                'Analyse the electromagnetic spectrum in relation to wavelengths, sources, detection and uses',
            ],
        },
        // TOPIC 28
        {
            section: 'Topic 28: Electrostatics',
            title: 'Electric Charges, Coulomb\'s Law and Electric Fields',
            subtopics: [
                'Existence of positive and negative charges in matter',
                'Charging a body by friction, contact and induction',
                'Electroscope',
                'Coulomb\'s inverse square law; electric field and potential',
                'Electric field intensity and potential difference',
                'Electric discharge and lightning',
            ],
            objectives: [
                'Identify charges; examine uses of an electroscope',
                'Apply Coulomb\'s square law of electrostatics to solve problems',
                'Deduce expressions for electric field intensity and potential difference',
                'Identify electric field flux patterns of isolated and interacting charges',
                'Analyse the distribution of charges on a conductor and how it is used in lightning conductors',
            ],
        },
        // TOPIC 29
        {
            section: 'Topic 29: Capacitors',
            title: 'Capacitance, Parallel Plate Capacitors and Energy Storage',
            subtopics: [
                'Types and functions of capacitors',
                'Parallel plate capacitors; capacitance of a capacitor',
                'Relationship between capacitance, area, separation of plates and medium (C = εA/d)',
                'Capacitors in series and parallel',
                'Energy stored in a capacitor',
            ],
            objectives: [
                'Determine uses of capacitors; analyse parallel plate capacitors',
                'Determine the capacitance of a capacitor',
                'Analyse the factors that affect the capacitance of a capacitor',
                'Solve problems involving the arrangement of capacitors',
                'Determine the energy stored in capacitors',
            ],
        },
        // TOPIC 30
        {
            section: 'Topic 30: Electric Cells',
            title: 'Types of Cells, Batteries and Efficiency',
            subtopics: [
                'Simple voltaic cell and its defects; Daniel cell, Leclanche cell (wet and dry)',
                'Lead-acid accumulator; Nickel-Iron (Nife), Lithium-iron and Mercury-cadmium cells',
                'Maintenance of cells and batteries',
                'Arrangement of cells; efficiency of a cell',
            ],
            objectives: [
                'Identify the defects of the simple voltaic cell and their correction',
                'Compare different types of cells including solar cell',
                'Compare the advantages of lead-acid and Nickel-iron accumulator',
                'Solve problems involving series and parallel combination of cells',
            ],
        },
        // TOPIC 31
        {
            section: 'Topic 31: Current Electricity',
            title: 'EMF, Ohm\'s Law, Resistance and Potentiometer',
            subtopics: [
                'EMF, potential difference (p.d.), current, internal resistance of a cell and lost volt',
                'Ohm\'s law; measurement of resistance; metre bridge',
                'Resistance in series and in parallel and their combinations',
                'The potentiometer method of measuring EMF, current and internal resistance',
                'Electrical networks (Kirchhoff\'s laws)',
            ],
            objectives: [
                'Differentiate between EMF, p.d., current and internal resistance of a cell',
                'Apply Ohm\'s law to solve problems; use metre bridge to calculate resistance',
                'Compute effective total resistance in both parallel and series arrangements of resistors',
                'Determine the resistivity and conductivity of a conductor',
                'Measure EMF, current and internal resistance using the potentiometer; identify its advantages',
                'Apply Kirchhoff\'s law in electrical networks',
            ],
        },
        // TOPIC 32
        {
            section: 'Topic 32: Electrical Energy and Power',
            title: 'Electrical Power, Transmission, Heating Effects and Wiring',
            subtopics: [
                'Concepts of electrical energy and power; commercial units',
                'Electric power transmission',
                'Heating effects of electric current',
                'Electrical wiring of houses; use of fuses',
            ],
            objectives: [
                'Apply the expressions of electrical energy and power to solve problems',
                'Analyse how power is transmitted from the power station to the consumer',
                'Identify the heating effects of current and its uses',
                'Identify the advantages of parallel arrangement over series',
                'Determine the fuse rating',
            ],
        },
        // TOPIC 33
        {
            section: 'Topic 33: Magnets and Magnetic Fields',
            title: 'Magnets, Magnetic Fields and Earth\'s Magnetism',
            subtopics: [
                'Natural and artificial magnets; magnetic properties of soft iron and steel',
                'Methods of making and demagnetizing magnets',
                'Concept of magnetic field; magnetic field of a permanent magnet',
                'Magnetic field round a straight current carrying conductor, circular wire and solenoid',
                'Properties of the earth\'s magnetic field: north and south poles, magnetic meridian, angle of dip and declination',
                'Flux and flux density; variation of magnetic field intensity over the earth\'s surface',
                'Applications: earth\'s magnetic field in navigation and mineral exploration',
            ],
            objectives: [
                'Give examples of natural and artificial magnets; differentiate between magnetic properties of soft iron and steel',
                'Identify the various methods of making and demagnetizing magnets; describe how to keep a magnet from losing its magnetism',
                'Determine the flux pattern when two magnets are placed together pole to pole',
                'Determine the flux of a current carrying conductor, circular wire and solenoid including the polarity of the solenoid',
                'Determine the flux pattern of a magnet placed in the earth\'s magnetic field',
                'Identify the magnetic elements of the earth\'s flux; determine the variation of earth\'s magnetic field',
                'Examine the applications of the earth\'s magnetic field',
            ],
        },
        // TOPIC 34
        {
            section: 'Topic 34: Force on a Current-Carrying Conductor in a Magnetic Field',
            title: 'Magnetic Force, DC Motor, Galvanometer and Instruments',
            subtopics: [
                'Quantitative treatment of force between two parallel current-carrying conductors',
                'Force on a charge moving in a magnetic field',
                'The DC motor; electromagnets; carbon microphone',
                'Moving coil and moving iron instruments',
                'Conversion of galvanometers to ammeters and voltmeters using shunts and multipliers',
                'Sensitivity of a galvanometer',
            ],
            objectives: [
                'Determine the direction of force on a current carrying conductor using Fleming\'s left-hand rule',
                'Interpret the attractive and repulsive forces between two parallel current-carrying conductors',
                'Determine the relationship between force, magnetic field strength, velocity and the angle through which the charge enters the field',
                'Interpret the working of the DC motor; analyse the principle of electromagnets and give examples',
                'Compare moving iron and moving coil instruments',
                'Convert a galvanometer into an ammeter or a voltmeter',
                'Identify the factors affecting the sensitivity of a galvanometer',
            ],
        },
        // TOPIC 35
        {
            section: 'Topic 35: Electromagnetic Induction',
            title: 'Faraday\'s Laws, Generators, Transformers and Inductance',
            subtopics: [
                'Faraday\'s laws of electromagnetic induction; factors affecting induced EMF',
                'Lenz\'s law as an illustration of the principle of conservation of energy',
                'AC and DC generators; transformers; the induction coil',
                'Inductance: explanation, unit, energy stored in an inductor (E = ½I²L), applications',
                'Eddy current: reduction and applications',
            ],
            objectives: [
                'Interpret the laws of electromagnetic induction; identify factors affecting induced EMF',
                'Recognize how Lenz\'s law illustrates the principle of conservation of energy',
                'Interpret the diagrammatic set-up of AC generators; identify types of transformers and their principles',
                'Assess the functions of an induction coil',
                'Interpret the inductance of an inductor; recognize units of inductance',
                'Calculate the effective total inductance in series and parallel arrangement',
                'Deduce the expression for the energy stored in an inductor; examine applications of inductors',
                'Describe methods by which eddy current losses can be reduced; determine ways eddy currents can be used',
            ],
        },
        // TOPIC 36
        {
            section: 'Topic 36: Simple AC Circuits',
            title: 'AC Voltage, Reactance, Impedance and Resonance',
            subtopics: [
                'AC current and voltage; peak and r.m.s. values',
                'AC source connected to a resistor, capacitor (capacitive reactance), inductor (inductive reactance)',
                'Series R-L-C circuits; vector diagram, phase angle and power factor',
                'Resistance and impedance; effective voltage in an R-L-C circuit',
                'Resonance and resonance frequency (F₀ = 1/2π√LC)',
            ],
            objectives: [
                'Identify AC current and DC voltage; differentiate between peak and r.m.s. values',
                'Determine the phase difference between current and voltage',
                'Interpret series R-L-C circuits; analyse vector diagrams',
                'Calculate the effective voltage, reactance and impedance',
                'Recognize the condition by which the circuit is at resonance; determine the resonant frequency',
                'Determine the instantaneous power, average power and the power factor in AC circuits',
            ],
        },
        // TOPIC 37
        {
            section: 'Topic 37: Conduction of Electricity Through Liquids and Gases',
            title: 'Electrolysis and Conduction Through Gases',
            subtopics: [
                'Electrolytes and non-electrolytes; concept of electrolysis',
                'Faraday\'s laws of electrolysis; applications (electroplating, calibration of ammeter)',
                'Discharge through gases (qualitative treatment only)',
                'Applications of conduction of electricity through gases',
            ],
            objectives: [
                'Distinguish between electrolytes and non-electrolytes',
                'Analyse the processes of electrolysis; apply Faraday\'s laws of electrolysis to solve problems',
                'Analyse discharge through gases',
                'Determine some applications/uses of conduction of electricity through gases',
            ],
        },
        // TOPIC 38
        {
            section: 'Topic 38: Elementary Modern Physics',
            title: 'Atomic Models, Photoelectric Effect, Radioactivity and Nuclear Energy',
            subtopics: [
                'Models of the atom and their limitations; elementary structure of the atom',
                'Energy levels and spectra',
                'Thermionic and photoelectric emissions; Einstein\'s equation and stopping potential',
                'Applications of thermionic emission and photoelectric effects',
                'Simple method of production of X-rays',
                'Properties and applications of alpha, beta and gamma rays',
                'Half-life and decay constant',
                'Simple ideas of production of energy by fusion and fission',
                'Binding energy, mass defect and Einstein\'s energy equation (ΔE = ΔMC²)',
                'Wave-particle paradox (duality of matter); electron diffraction; the uncertainty principle',
            ],
            objectives: [
                'Identify the models of the atom and write their limitations; describe elementary structure of the atom',
                'Differentiate between the energy levels and spectra of atoms',
                'Compare thermionic emission and photoelectric emission; apply Einstein\'s equation to solve problems',
                'Calculate the stopping potential; relate applications of thermionic emission and photoelectric effects',
                'Interpret the process involved in the production of X-rays; identify some properties and applications of X-rays',
                'Analyse elementary radioactivity; distinguish between stable and unstable nuclei; identify isotopes',
                'Compare the properties of alpha, beta and gamma rays',
                'Relate half-life and decay constant of a radioactive element',
                'Determine the binding energy, mass defect and Einstein\'s energy equation',
                'Analyse wave-particle duality; solve numerical problems based on the uncertainty principle and wave-particle duality',
            ],
        },
        // TOPIC 39
        {
            section: 'Topic 39: Introductory Electronics',
            title: 'Semiconductors, Diodes and Transistors',
            subtopics: [
                'Distinction between metals, semiconductors and insulators (elementary knowledge of band gap required)',
                'Intrinsic and extrinsic semiconductors',
                'n-type and p-type semiconductors',
                'Elementary knowledge of diodes and transistors',
                'Uses of semiconductors and diodes in rectification; transistors in amplification',
            ],
            objectives: [
                'Differentiate between conductors, semiconductors and insulators',
                'Distinguish between intrinsic and extrinsic semiconductors',
                'Distinguish between electron and hole carriers',
                'Distinguish between n-type and p-type semiconductors',
                'Analyse diodes and transistors; relate diodes to rectification and transistors to amplification',
            ],
        },
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

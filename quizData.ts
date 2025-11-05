export interface AnswerOption {
    answerText: string;
    isCorrect: boolean;
}

export interface Question {
    questionText: string;
    answerOptions: AnswerOption[];
    explanation: string;
}

export interface Quiz {
    titleEn: string;
    titleHi: string;
    questions: Question[];
}

export const QUIZ_DATA: { [key: string]: Quiz } = {
    'insaan-apne-aap-ko-jaan-quiz': {
        titleEn: 'Man! Know Thyself',
        titleHi: 'इंसान! अपने आप को जान',
        questions: [
            {
                questionText: 'What is the central message of the book "Man! Know Thyself"?',
                answerOptions: [
                    { answerText: 'The importance of physical health.', isCorrect: false },
                    { answerText: 'The path to self-realization and knowing one\'s true, spiritual nature.', isCorrect: true },
                    { answerText: 'Achieving material success in the world.', isCorrect: false },
                    { answerText: 'The history of different philosophies.', isCorrect: false },
                ],
                explanation: 'The book focuses on the spiritual journey inward to discover the soul and its connection to the divine, which is the essence of self-realization.'
            },
            {
                questionText: 'According to the teachings, what is the "self" that one must come to "know"?',
                answerOptions: [
                    { answerText: 'The physical body and its needs.', isCorrect: false },
                    { answerText: 'The intellectual mind and its thoughts.', isCorrect: false },
                    { answerText: 'The soul, a particle of God.', isCorrect: true },
                    { answerText: 'One\'s social identity and status.', isCorrect: false },
                ],
                explanation: 'The teachings emphasize that our true self is the soul, which is distinct from the body and mind, and is a part of the universal spirit or God.'
            },
            {
                questionText: 'What practice is often described as the key to "knowing thyself"?',
                answerOptions: [
                    { answerText: 'Intense physical exercise.', isCorrect: false },
                    { answerText: 'Studying ancient scriptures.', isCorrect: false },
                    { answerText: 'Engaging in debates and discussions.', isCorrect: false },
                    { answerText: 'Meditation on the inner Light and Sound.', isCorrect: true },
                ],
                explanation: 'Meditation is presented as the practical method to withdraw one\'s attention from the outer world and travel within to experience the soul.'
            },
            {
                questionText: 'Who is the "Man" addressed in the title?',
                answerOptions: [
                    { answerText: 'Only adult males.', isCorrect: false },
                    { answerText: 'A specific historical figure.', isCorrect: false },
                    { answerText: 'All of humanity, irrespective of gender, race, or religion.', isCorrect: true },
                    { answerText: 'Only followers of a specific faith.', isCorrect: false },
                ],
                explanation: 'The title addresses all human beings, calling upon each individual to embark on the journey of self-discovery.'
            },
            {
                questionText: 'What is considered the primary obstacle in the path of self-knowledge?',
                answerOptions: [
                    { answerText: 'The mind and its attachment to the material world.', isCorrect: true },
                    { answerText: 'Lack of financial resources.', isCorrect: false },
                    { answerText: 'Living in a noisy city.', isCorrect: false },
                    { answerText: 'Not having enough free time.', isCorrect: false },
                ],
                explanation: 'The mind, with its constant thoughts, desires, and attachments to the external world, is seen as the veil that hides the soul from our own awareness.'
            }
        ]
    },
    'insaan-apne-aap-ko-jaan-quiz-2': {
        titleEn: 'Man! Know Thyself (Advanced)',
        titleHi: 'इंसान! अपने आप को जान (उन्नत)',
        questions: [
            {
                questionText: 'The human body is often referred to as the "temple of the living God." What does this imply?',
                answerOptions: [
                    { answerText: 'It should be worshipped with rituals.', isCorrect: false },
                    { answerText: 'It is a sacred vessel where the soul and God can be realized.', isCorrect: true },
                    { answerText: 'It is physically perfect and indestructible.', isCorrect: false },
                    { answerText: 'It should be adorned with expensive clothes and jewelry.', isCorrect: false },
                ],
                explanation: 'This metaphor emphasizes that the divine resides within us, and the body is the sacred place where we can experience this connection through inner spiritual practice.'
            },
            {
                questionText: 'What is the role of a true spiritual Master or "Sant Satguru"?',
                answerOptions: [
                    { answerText: 'To perform miracles and predict the future.', isCorrect: false },
                    { answerText: 'To give theoretical knowledge from scriptures.', isCorrect: false },
                    { answerText: 'To provide a practical technique for inner connection and guide the soul back to its source.', isCorrect: true },
                    { answerText: 'To establish a new religion and gain followers.', isCorrect: false },
                ],
                explanation: 'A true Master is a guide who has traversed the inner spiritual path and can give the disciple a first-hand experience of the inner Light and Sound, guiding them on their journey.'
            },
            {
                questionText: 'What is the law of Karma, as explained in these teachings?',
                answerOptions: [
                    { answerText: 'A system of punishment and reward controlled by an external deity.', isCorrect: false },
                    { answerText: 'The principle that every action (thought, word, and deed) has a corresponding reaction that binds the soul.', isCorrect: true },
                    { answerText: 'A concept that applies only to major life events, not daily actions.', isCorrect: false },
                    { answerText: 'Something that can be erased simply by asking for forgiveness.', isCorrect: false },
                ],
                explanation: 'The law of Karma is a natural law of action and reaction. All our actions create karmic debts that keep the soul tied to the cycle of birth and death, and must be cleared to achieve liberation.'
            },
            {
                questionText: 'How do outer rituals (like pilgrimages, fasts, etc.) compare to the inner journey of meditation?',
                answerOptions: [
                    { answerText: 'They are more important than meditation for spiritual progress.', isCorrect: false },
                    { answerText: 'They are prerequisites before one can begin to meditate.', isCorrect: false },
                    { answerText: 'They are considered external practices, while true spirituality is an inner journey to experience God directly.', isCorrect: true },
                    { answerText: 'They provide the same spiritual benefit as meditation.', isCorrect: false },
                ],
                explanation: 'The teachings emphasize that while outer practices may have their place, the ultimate goal is to go within. True spirituality is a science of the soul, not a set of external rituals.'
            },
            {
                questionText: 'What is described as the ultimate purpose or goal of human life?',
                answerOptions: [
                    { answerText: 'To achieve fame, wealth, and power.', isCorrect: false },
                    { answerText: 'To enjoy the sensory pleasures of the world to the fullest.', isCorrect: false },
                    { answerText: 'For the soul to return and merge back into God, its source.', isCorrect: true },
                    { answerText: 'To create a perfect society on Earth.', isCorrect: false },
                ],
                explanation: 'The primary purpose of the human birth is spiritual: for the soul (a drop) to realize its true nature and merge back into the ocean of all-consciousness (God).'
            }
        ]
    }
};
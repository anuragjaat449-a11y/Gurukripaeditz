import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { QUIZ_DATA, Quiz, AnswerOption } from './quizData';

const BookQuiz = () => {
    const [quiz, setQuiz] = useState<Quiz | null>(null);
    const [error, setError] = useState('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<AnswerOption | null>(null);
    const [showResults, setShowResults] = useState(false);
    const [key, setKey] = useState(0); // For re-triggering animations

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const quizId = urlParams.get('id');
        if (!quizId) {
            setError('No Quiz ID provided in URL.');
            return;
        }
        const quizData = QUIZ_DATA[quizId];
        if (!quizData) {
            setError(`Quiz with ID "${quizId}" not found.`);
            return;
        }
        setQuiz(quizData);
    }, []);
    
    const handleAnswerClick = (answer: AnswerOption) => {
        if (selectedAnswer) return; // Prevent changing answer
        
        setSelectedAnswer(answer);
        if (answer.isCorrect) {
            setScore(prev => prev + 1);
        }
    };
    
    const handleNextQuestion = () => {
        const nextQuestion = currentQuestionIndex + 1;
        if (quiz && nextQuestion < quiz.questions.length) {
            setCurrentQuestionIndex(nextQuestion);
            setSelectedAnswer(null);
            setKey(prev => prev + 1); // Change key to re-mount the component and trigger animation
        } else {
            setShowResults(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowResults(false);
        setKey(prev => prev + 1);
    };

    const getButtonClass = (answer: AnswerOption) => {
        if (!selectedAnswer) {
            return 'btn-premium-secondary';
        }
        if (answer.isCorrect) {
            return 'bg-green-500 border-green-400 text-white';
        }
        if (selectedAnswer === answer && !answer.isCorrect) {
            return 'bg-red-500 border-red-400 text-white';
        }
        return 'btn-premium-secondary opacity-60';
    };

    if (error) {
        return <div className="min-h-screen w-full flex items-center justify-center text-center p-4 text-red-400 text-xl">{error}</div>;
    }

    if (!quiz) {
        return <div className="min-h-screen w-full flex items-center justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-brand-gold"></div></div>;
    }
    
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <div className="glass-card p-6 md:p-8">
                    {showResults ? (
                         <div className="text-center" style={{ animation: 'fade-in-up 0.5s ease-out' }}>
                            <h2 className="text-3xl font-bold text-brand-gold font-serif" style={{ fontFamily: 'Cinzel, serif' }}>Quiz Complete!</h2>
                            <p className="text-white/80 mt-4 text-lg">Your final score is:</p>
                            <p className="text-6xl font-bold my-4 text-brand-gold">{score} <span className="text-4xl text-white/90">/ {quiz.questions.length}</span></p>
                             <div className="flex justify-center gap-4 mt-8">
                                <button onClick={handleRestartQuiz} className="py-3 px-6 rounded-md font-bold btn-premium">
                                    Retake Quiz
                                </button>
                                <button onClick={() => window.close()} className="py-3 px-6 rounded-md font-bold btn-premium-secondary">
                                    Close
                                </button>
                             </div>
                         </div>
                    ) : (
                        <div key={key} style={{ animation: 'fade-in-up 0.5s ease-out' }}>
                            {/* Header */}
                            <div className="mb-6">
                                <p className="text-brand-gold text-sm font-bold tracking-widest uppercase">{quiz.titleEn} Quiz</p>
                                <div className="mt-2 flex justify-between items-center text-white/70">
                                    <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                                </div>
                                <div className="w-full bg-black/30 rounded-full h-2.5 mt-2">
                                    <div className="bg-brand-gold h-2.5 rounded-full transition-all duration-500" style={{width: `${progressPercentage}%`}}></div>
                                </div>
                            </div>
                            
                            {/* Question */}
                            <h2 className="text-2xl md:text-3xl font-semibold leading-tight mb-6">{currentQuestion.questionText}</h2>
                            
                            {/* Answers */}
                            <div className="space-y-4">
                                {currentQuestion.answerOptions.map((answer, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerClick(answer)}
                                        disabled={!!selectedAnswer}
                                        className={`w-full text-left p-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none ${getButtonClass(answer)}`}
                                    >
                                        {answer.answerText}
                                    </button>
                                ))}
                            </div>

                            {/* Explanation & Next Button */}
                            {selectedAnswer && (
                                <div className="mt-6" style={{ animation: 'fade-in-up 0.5s ease-out' }}>
                                    <div className="bg-black/20 p-4 rounded-lg">
                                        <p className="font-bold text-brand-gold">Explanation:</p>
                                        <p className="text-white/90">{currentQuestion.explanation}</p>
                                    </div>
                                    <button onClick={handleNextQuestion} className="w-full mt-6 py-3 px-6 rounded-md text-lg font-bold btn-premium">
                                        {currentQuestionIndex === quiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <BookQuiz />
      </React.StrictMode>
    );
}

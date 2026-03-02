import { createContext, useContext, useState, useMemo } from 'react';
import { flashcards } from './flashcards';
import { getRandomIndex } from './utils';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [card, setCard] = useState(null);

  const handleStart = () => {
    setIsStarted(true);
    const selectedIndex = getRandomIndex(flashcards.length);
    setCard(flashcards[selectedIndex]);
  };
  
  const handleNextQuestion = () => {
    const selectedIndex = getRandomIndex(flashcards.length);
    setCard(flashcards[selectedIndex]);
  };

  const value = {
    isStarted,
    card,
    handleStart,
    handleNextQuestion,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};


export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

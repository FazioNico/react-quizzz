import { useState } from "react";
import { useQuiz } from "./QuizContext";
import { useTheme } from "./Theme-hook";

/**
 * Component to show question and answer of flashcard
 * @returns 
 */
export const CardComponent = () => {
  const { card } = useQuiz();
  const [viewAnswer, setViewAnswer] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flashcard-content">
      {theme} - Question: {card.question}
      {viewAnswer && <div>Answer: {card.answer}</div>}
      <button onClick={() => setViewAnswer(!viewAnswer)}>
        {viewAnswer ? 'Hide Answer' : 'View Answer'}
      </button>
    </div>
  );
}
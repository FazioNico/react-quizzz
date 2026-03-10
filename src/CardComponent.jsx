import { useState } from 'react';
import { useQuiz } from './QuizContext';

/**
 * Component to show question and answer of flashcard
 * @returns html react component
 */
export const CardComponent = () => {
  const { card } = useQuiz();
  const [viewAnswer, setViewAnswer] = useState(false);

  if (!card) {
    return null;
  }

  return (
    <article className="flashcard">
      <div className="flashcard__shine" />

      <div className="flashcard__meta">
        <span className="flashcard__tag">Question active</span>
        <span className="flashcard__counter">{viewAnswer ? 'Réponse visible' : 'Réponse masquée'}</span>
      </div>

      <div className="flashcard__body">
        <p className="flashcard__label">Question</p>
        <h2>{card.question}</h2>

        <div className={`flashcard__answer ${viewAnswer ? 'is-visible' : ''}`}>
          <p className="flashcard__label">Réponse</p>
          <p>{card.answer}</p>
        </div>
      </div>

      <div className="flashcard__actions">
        <button
          className="secondary-button"
          type="button"
          onClick={() => setViewAnswer((currentState) => !currentState)}
        >
          {viewAnswer ? 'Masquer la réponse' : 'Afficher la réponse'}
        </button>
      </div>
    </article>
  );
};

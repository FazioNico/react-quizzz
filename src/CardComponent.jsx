import { useState } from "react";

export const CardComponent = (props) => {
  const card = props.card;
  const [viewAnswer, setViewAnswer] = useState(false);

  return (
    <div className="flashcard-content">
      Question: {card.question}
      {viewAnswer && <div>Answer: {card.answer}</div>}
      <button onClick={() => setViewAnswer(!viewAnswer)}>
        {viewAnswer ? 'Hide Answer' : 'View Answer'}
      </button>
    </div>
  );
}
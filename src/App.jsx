import { useState } from 'react'
import './App.css';
import { flashcards } from './flashcards';
import { getRandomIndex } from './utils';
import { CardComponent } from './CardComponent';


function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [card, setCard] = useState(null);

  const handleStart = () => {
    setIsStarted(true);
    const selectedIndex = getRandomIndex(flashcards.length);
    setCard(flashcards[selectedIndex]);
    console.log(card, isStarted);
  };
  
  const handleNextQuestion = () => {
    const selectedIndex = getRandomIndex(flashcards.length);
    setCard(flashcards[selectedIndex]);
    console.log(card, isStarted);
  };

  return (
    <>
      <h1>Flashcards Quizzz ${isStarted ? 'started' : 'not started'}</h1>
      <div>
        {isStarted && <CardComponent card={card} />}
      </div>
      {!isStarted && <button onClick={handleStart}>Start</button>}
      {isStarted && <button onClick={handleNextQuestion}>Next Question</button>}
    </>
  )
}

export default App

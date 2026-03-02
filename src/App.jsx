
import './App.css';
import { CardComponent } from './CardComponent';
import { useQuiz } from './QuizContext';
import { useTheme } from './Theme-hook';


function App() {
  const { isStarted, handleStart, handleNextQuestion } = useQuiz();
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <h1>Flashcards Quizzz: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div>
        {isStarted && <CardComponent />}
      </div>
      {!isStarted && <button onClick={handleStart}>Start</button>}
      {isStarted && <button onClick={handleNextQuestion}>Next Question</button>}
    </>
  )
}

export default App


import './App.css';
import { CardComponent } from './CardComponent';
import { useQuiz } from './QuizContext';
import { useTheme } from './Theme-hook';


function App() {
  const { isStarted, handleStart, handleNextQuestion } = useQuiz();
  const { theme, toggleTheme } = useTheme();
  const apiKey = import.meta.env.VITE_DEMO_API_KEY;
  return (
    <>
      <h1 className="bg-linear-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
        Flashcards Quizzz: {apiKey}
      </h1>
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

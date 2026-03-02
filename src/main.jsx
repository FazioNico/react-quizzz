import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QuizProvider } from './QuizContext.jsx'
import { ThemeProvider } from './Theme-hook.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </ThemeProvider>
  </StrictMode>,
)

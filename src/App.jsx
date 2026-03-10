import './App.css';
import { CardComponent } from './CardComponent';
import { useQuiz } from './QuizContext';
import { useTheme } from './Theme-hook';

function App() {
  const { isStarted, handleStart, handleNextQuestion } = useQuiz();
  const { theme, toggleTheme } = useTheme();

  return (
    <main className={`app-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <div className="app-shell__glow app-shell__glow--cyan" />
      <div className="app-shell__glow app-shell__glow--lime" />

      <header className="topbar">
        <div>
          <h1>JS Quizzz - deploy FB</h1>
        </div>
        <button
          className="ghost-button"
          type="button"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
        </button>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <span className="hero-badge">Interface sticky</span>
          <p>
            Une présentation minimaliste avec halo fluo, contraste propre et focus
            total sur la carte active.
          </p>
        </div>

        <div className="control-dock">
          {!isStarted ? (
            <button className="primary-button" type="button" onClick={handleStart}>
              Lancer le quiz
            </button>
          ) : (
            <button className="primary-button" type="button" onClick={handleNextQuestion}>
              Carte suivante
            </button>
          )}
        </div>
      </section>

      <section className="board-layout">
        <aside className="sticky-panel">
          <span className="sticky-panel__label">Direction</span>
          <h2>Minimal, clean, fluorescent.</h2>
          <p>
            Le header reste visible, les actions sont stables, et la carte garde
            un rendu premium sur desktop comme mobile.
          </p>
        </aside>

        <div className="card-stage">
          {isStarted ? (
            <CardComponent />
          ) : (
            <div className="empty-state">
              <span className="empty-state__badge">Ready</span>
              <h2>Appuie sur lancer pour afficher la première card.</h2>
              <p>
                La carte prendra le centre, avec une lecture claire de la question
                puis de la réponse.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;

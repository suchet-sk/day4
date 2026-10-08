import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h2>DevOps Demo</h2>
        <span>CI Project</span>
      </header>

      <main className="container">
        <section className="hero">
          <p className="tag">CONTINUOUS INTEGRATION</p>

          <h1>suchet's React CI Demo 🚀</h1>

          <p className="description">
            This is a demo React application created to learn
            Continuous Integration and DevOps.
          </p>

          <button>Build & Test</button>
        </section>

        <section className="cards">
          <div className="card">
            <h3>📦 Code</h3>
            <p>React source code is stored in GitHub.</p>
          </div>

          <div className="card">
            <h3>⚙️ CI Pipeline</h3>
            <p>Every code push can automatically trigger a build.</p>
          </div>

          <div className="card">
            <h3>✅ Testing</h3>
            <p>Automated checks verify that the application works.</p>
          </div>
        </section>

        <section className="pipeline">
          <h2>CI Pipeline</h2>

          <div className="steps">
            <div className="step">
              <strong>1</strong>
              <span>Git Push</span>
            </div>

            <div className="arrow">→</div>

            <div className="step">
              <strong>2</strong>
              <span>Build</span>
            </div>

            <div className="arrow">→</div>

            <div className="step">
              <strong>3</strong>
              <span>Test</span>
            </div>

            <div className="arrow">→</div>

            <div className="step">
              <strong>4</strong>
              <span>Deploy</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>React + GitHub + CI/CD | DevOps Learning Project</p>
      </footer>
    </div>
  );
}

export default App;
// Purpose: Main App component showcasing the HelmGuard Demo Widget

import React from 'react';
import { WidgetContainer } from './components/HelmGuardWidget';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Demo Page Content */}
      <div className="demo-page">
        <header className="demo-header">
          <h1>HelmGuard Demo Widget</h1>
          <p>Experience automated cybersecurity questionnaire responses</p>
        </header>

        <main className="demo-content">
          <section className="demo-section">
            <h2>Try It Out!</h2>
            <p>Click the chat icon in the bottom right corner to start asking cybersecurity questionnaire questions.</p>
            
            <div className="example-questions">
              <h3>Example Questions You Can Ask:</h3>
              <ul>
                <li>What is your password policy?</li>
                <li>How do you handle incident response?</li>
                <li>What encryption standards do you use?</li>
                <li>Do you have a CISO?</li>
                <li>How often do you conduct security assessments?</li>
              </ul>
            </div>
          </section>

          <section className="demo-section">
            <h2>About This Demo</h2>
            <p>This widget demonstrates HelmGuard's ability to automatically respond to cybersecurity questionnaires using your existing documentation. In this demo, we're using a sample set of 25 common security questions.</p>
            <p>The full HelmGuard platform can handle thousands of questions and use your actual security documentation to generate accurate, consistent responses.</p>
          </section>
        </main>
      </div>

      {/* HelmGuard Widget */}
      <WidgetContainer />
    </div>
  );
}

export default App;

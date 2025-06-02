// Purpose: Main App component showcasing the HelmGuard Demo Widget

import React, { useState } from 'react';
import { WidgetContainer } from './components/HelmGuardWidget';
import './App.css';

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmbedCode = () => {
    const code = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>`;
    
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      alert('Copy failed. Please select and copy the code manually.');
    });
  };

  return (
    <div className="App">
      {/* Demo Page Content */}
      <div className="demo-page">
        <header className="demo-header">
          <img src="/HelmguardIcon.png" alt="HelmGuard" className="helmguard-logo" />
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
                <li>Describe the process for managing user access, including onboarding, periodic reviews, and offboarding procedures.</li>
                <li>How does the company assess and monitor the security posture of vendors and third-party service providers?</li>
                <li>What data classification scheme is in place, and how is sensitive data identified and protected throughout its lifecycle?</li>
                <li>How does the company measure the effectiveness of security training and address identified gaps?</li>
                <li>What encryption standards and technologies are implemented for data at rest and in transit?</li>
              </ul>
            </div>
          </section>

          <section className="demo-section embed-section">
            <h2>📋 Add This Widget to Your Website</h2>
            <p>Copy and paste these 2 lines into your website's head section:</p>
            
            <div className="code-block">
              <pre><code>{`<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.css">
<script src="https://cdn.jsdelivr.net/gh/HenryAllen04/HelmguardWidget@main/dist/helmguard-widget.js" data-auto-init="true"></script>`}</code></pre>
            </div>
            
            <button className="copy-button" onClick={copyEmbedCode}>
              📋 {copied ? 'Copied!' : 'Copy to Clipboard'}
            </button>
            
            {copied && (
              <div className="success-message">
                ✅ Code copied to clipboard! Now paste it into your website's head section.
              </div>
            )}

            <div className="embed-instructions">
              <h4>🚀 For Webflow Users:</h4>
              <ol>
                <li>Go to Project Settings → Custom Code</li>
                <li>Paste the code into "Head Code"</li>
                <li>Publish your site</li>
                <li>The blue chat button will appear automatically!</li>
              </ol>
            </div>
          </section>

          <section className="demo-section about-section">
            <h2>About This Demo</h2>
            <p>This widget demonstrates HelmGuard's ability to automatically respond to cybersecurity questionnaires using your existing documentation. In this demo, we're using a sample set of 25 common security questions.</p>
            <p>The full HelmGuard platform can handle thousands of questions and use your actual security documentation to generate accurate, consistent responses.</p>
            
            <div className="github-info">
              <h4>Give me a star on GitHub ⭐️</h4>
              <p>This widget is open source and fully customizable for your needs. You can view the source code, contribute, or create your own version:</p>
              <a 
                href="https://github.com/HenryAllen04/HelmguardWidget" 
                target="_blank" 
                rel="noopener noreferrer"
                className="github-link"
              >
                Check out the repo
              </a>
              <p className="tech-stack">
                Built with React 19, Webpack, and deployed via jsDelivr CDN for global performance.
              </p>
            </div>
          </section>
        </main>
      </div>

      {/* HelmGuard Widget */}
      <WidgetContainer />
    </div>
  );
}

export default App;

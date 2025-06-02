// Purpose: Entry point for the HelmGuard Demo Widget when embedded in external websites

import React from 'react';
import ReactDOM from 'react-dom/client';
import { WidgetContainer } from './components/HelmGuardWidget';

// Widget initialization function
function init(containerId = 'helmguard-widget-root') {
  // Create container if it doesn't exist
  let container = document.getElementById(containerId);
  
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }

  // Render the widget
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <WidgetContainer />
    </React.StrictMode>
  );
}

// Auto-initialize if script is loaded with data-auto-init="true"
if (document.currentScript && document.currentScript.getAttribute('data-auto-init') === 'true') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => init());
  } else {
    init();
  }
}

// Export for manual initialization
export { init }; 
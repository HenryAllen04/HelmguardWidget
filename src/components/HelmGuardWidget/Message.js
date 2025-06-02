// Purpose: Message component for the HelmGuard Demo Widget - renders individual chat messages with appropriate styling

import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  const { type, text, timestamp, showContactLink } = message;

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`helmguard-message helmguard-message-${type}`}>
      <div className="helmguard-message-content">
        <div className="helmguard-message-text">
          {text}
          {showContactLink && (
            <div className="helmguard-contact-link">
              <a 
                href="https://helmguard.ai/contact" 
                target="_blank" 
                rel="noopener noreferrer"
                className="helmguard-cta-button"
              >
                Contact Us for a Demo →
              </a>
            </div>
          )}
        </div>
        <div className="helmguard-message-time">
          {formatTime(timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message; 
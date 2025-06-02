// Purpose: Input area component for the HelmGuard Demo Widget - handles user text input and submission

import React, { useState, useRef } from 'react';
import './InputArea.css';

const InputArea = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedValue = inputValue.trim();
    if (!trimmedValue || isLoading) return;

    setIsLoading(true);
    onSendMessage(trimmedValue);
    setInputValue('');
    
    // Reset loading state after message is processed
    setTimeout(() => {
      setIsLoading(false);
      inputRef.current?.focus();
    }, 1100);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="helmguard-input-area" onSubmit={handleSubmit}>
      <div className="helmguard-input-wrapper">
        <textarea
          ref={inputRef}
          className="helmguard-input-field"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask a cybersecurity questionnaire question..."
          rows={1}
          disabled={isLoading}
          aria-label="Type your question"
        />
        <button
          type="submit"
          className="helmguard-send-button"
          disabled={!inputValue.trim() || isLoading}
          aria-label="Send message"
        >
          {isLoading ? (
            <svg className="helmguard-loading-spinner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="50.27" strokeDashoffset="25.13">
                <animateTransform attributeName="transform" type="rotate" from="0 10 10" to="360 10 10" dur="1s" repeatCount="indefinite"/>
              </circle>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 10L3 2V18L19 10Z" fill="currentColor"/>
            </svg>
          )}
        </button>
      </div>
    </form>
  );
};

export default InputArea; 
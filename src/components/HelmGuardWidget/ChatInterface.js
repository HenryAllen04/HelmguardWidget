// Purpose: Chat interface component for the HelmGuard Demo Widget - manages conversation display and user interaction

import React, { useRef, useEffect } from 'react';
import Message from './Message';
import InputArea from './InputArea';
import questionnaireData from '../../data/questionnaire.json';
import { findBestMatch } from '../../utils/questionMatcher';
import './ChatInterface.css';

const ChatInterface = ({ messages, onAddMessage, onClose }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleUserQuestion = async (question) => {
    // Add user message
    onAddMessage({
      type: 'user',
      text: question
    });

    // Simulate processing time
    setTimeout(() => {
      // Find best matching answer
      const match = findBestMatch(question, questionnaireData);
      
      if (match.confidence >= 0.75) {
        // High confidence match found
        onAddMessage({
          type: 'bot',
          text: match.answer
        });
      } else {
        // Low confidence or no match
        onAddMessage({
          type: 'bot',
          text: "I can help with common questions from our sample set. For your specific query, or to see how HelmGuard handles extensive questionnaires and your own documents, please visit our website or contact our team for a personalized demo.",
          showContactLink: true
        });
      }
    }, 1000);
  };

  return (
    <div className="helmguard-chat-interface">
      {/* Header */}
      <div className="helmguard-chat-header">
        <div className="helmguard-header-content">
          <h3>HelmGuard Assistant</h3>
          <p>Automated Cybersecurity Questionnaire Response</p>
        </div>
        <button 
          className="helmguard-close-button"
          onClick={onClose}
          aria-label="Close chat"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Messages Area */}
      <div className="helmguard-messages-container">
        {messages.map(message => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <InputArea onSendMessage={handleUserQuestion} />
    </div>
  );
};

export default ChatInterface; 
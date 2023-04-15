import React from 'react';
import '../styles/ChatMessages.css'

const CocktailDisplay = ({ messages }) => {
    return (
      <div className="chat-messages-container">
        {messages.map((message, index) => (
          <p key={index} className={`chat-message ${message.role}`}>
            <strong>{message.role === 'user' ? 'You: ' : 'AI: '}</strong>
            {message.content}
          </p>
        ))}
      </div>
    );
  };
  
  export default CocktailDisplay;
  


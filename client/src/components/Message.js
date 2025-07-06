import React from 'react';
import '../styles/Message.css';

function Message({ message }) {
  const { user, text, self } = message;

  return (
    <div className={`message-row ${self ? 'self' : 'other'}`}>
      <div className="bubble">
        <span className="user">{self ? 'You' : user}</span>
        <span className="text">{text}</span>
      </div>
    </div>
  );
}

export default Message;

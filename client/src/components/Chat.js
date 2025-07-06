import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Message from './Message';
import EmojiPicker from 'emoji-picker-react';
import '../styles/Chat.css';

const socket = io('http://localhost:3001');

function Chat() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  useEffect(() => {
    const name = prompt('Enter your username');
    setUsername(name || 'Guest');
  }, []);

  useEffect(() => {
    socket.on('chat-message', data => {
      setChat(prev => [...prev, data]);
    });

    socket.on('typing', (user) => {
      if (user !== username) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 2000);
      }
    });

    return () => {
      socket.off('chat-message');
      socket.off('typing');
    };
  }, [username]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msgObj = { user: username, text: message, self: true };
      socket.emit('chat-message', { ...msgObj, self: false });
      setChat(prev => [...prev, msgObj]);
      setMessage('');
      setShowPicker(false);
    }
  };

  const handleTyping = () => {
    socket.emit('typing', username);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {chat.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
      </div>

      {isTyping && <div className="typing-indicator">Someone is typing...</div>}

      {showPicker && (
        <EmojiPicker
          onEmojiClick={(e) => setMessage(prev => prev + e.emoji)}
          height={350}
        />
      )}

      <form className="chat-form" onSubmit={sendMessage}>
        <button type="button" className="emoji-btn" onClick={() => setShowPicker(prev => !prev)}>
          😊
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            handleTyping();
          }}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;

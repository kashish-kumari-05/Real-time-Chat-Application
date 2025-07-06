import React, { useEffect, useState } from 'react';
import EmojiPicker from 'emoji-picker-react';
import io from 'socket.io-client';
import Message from './Message';
import '../styles/Chat.css';


const socket = io("http://localhost:4000");

function Chat() {
  // ――― state ―――
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);  // [{user, text, self}, ...]
  const [isTyping, setIsTyping] = useState(false);   // others typing?
  const [showPicker, setShowPicker] = useState(false);

  // prompt once for username
  useEffect(() => {
    const name = prompt('Enter your username');
    setUsername(name?.trim() || 'Guest');
  }, []);

  // listen for messages
  useEffect(() => {
    socket.on('chat-message', data => setChat(prev => [...prev, data]));

    socket.on('typing', user => {
      setIsTyping(user && user !== username);
      // auto‑clear after 2 s
      if (user) setTimeout(() => setIsTyping(false), 2000);
    });

    return () => socket.off('chat-message');
  }, [username]);

  // send message
  const sendMessage = e => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    const msgObj = { user: username, text: trimmed, self: true };
    socket.emit('chat-message', { ...msgObj, self: false }); // tell others
    setChat(prev => [...prev, msgObj]);                      // show mine
    setMessage('');
  };

  return (
    <div className="chat-container">
      <header>
        <h2>💬 Real‑Time Chat</h2>
        <ThemeToggle />
      </header>

      <div className="chat-box">
        {chat.map((m, i) => (
          <Message key={i} message={m} />
        ))}
      </div>

      <form className="chat-form" onSubmit={sendMessage}>

        + <button
          type="button"
          className="emoji-btn"
          onClick={() => setShowPicker(p => !p)}
        >😊</button>

        <input
          value={message}
          onChange={e => {
            setMessage(e.target.value);
            socket.emit('typing', username);
          }}
          placeholder="Type your message…"
        />
        <button type="submit">Send</button>
      </form>
      +{showPicker && (
  <EmojiPicker
    onEmojiClick={e => {
      setMessage(prev => prev + e.emoji);
      setShowPicker(false);
    }}
    height={350}
  />
)}

{isTyping && (
  <div className="typing-indicator">…someone is typing</div>
)}
    </div>
  );
}

/* ----- dark / light theme toggle button ----- */
function ThemeToggle() {
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );
  useEffect(() => {
    document.body.className = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <button
      className="theme-btn"
      onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
    >
      {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}

export default Chat;


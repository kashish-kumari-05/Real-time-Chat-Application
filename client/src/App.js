import React, { useEffect, useState } from 'react';
import Chat from './components/Chat';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <button onClick={toggleTheme} className="theme-toggle">
        Toggle {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
      </button>
      <h2>💬 Real-Time Chat App</h2>
      <Chat />
    </div>
  );
}

export default App;

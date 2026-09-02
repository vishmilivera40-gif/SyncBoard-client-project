import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import Board from './components/Board';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Board onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
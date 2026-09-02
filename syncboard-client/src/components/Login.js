import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>📋 <span>Sync</span>Board</h1>
        <p style={{ textAlign: 'center', color: '#777', marginBottom: '20px' }}>
          Collaborative Task Management
        </p>
        <form onSubmit={handleSubmit}>
          <input 
            type="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <p style={{ textAlign: 'center', marginTop: '15px', fontSize: '14px', color: '#aaa' }}>
          Demo: Use any email/password
        </p>
      </div>
    </div>
  );
};

export default Login;
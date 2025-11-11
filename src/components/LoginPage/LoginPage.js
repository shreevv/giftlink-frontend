import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Task 10: Contains "content-type" and "Authorization"
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Note: Sending an Authorization header to a /login route is
          // unusual, but the task specifically requires it.
          // You might send a "dummy" token or a stored one if it exists.
          'Authorization': 'Bearer ' + localStorage.getItem('token'), 
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        // Add logic to redirect to main page
        console.log('Login successful', data.user.username);
      } else {
        console.error('Login failed');
      }
    } catch (e) {
      console.error('Login error', e);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;

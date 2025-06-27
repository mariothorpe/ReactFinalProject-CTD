import React, { useState } from 'react';

const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID2}/${
    import.meta.env.VITE_TABLE_NAME2
  }`;
  const token = `Bearer ${import.meta.env.VITE_PAT2}`;

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(url, {
              method: 'POST',
              headers: {
                'Authorization': token,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username, password }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              setLoginStatus('Login successful!');
              // Redirect or perform actions after successful login
            } else {
              setLoginStatus(data.message || 'Login failed.');
            }
          } catch (error) {
            console.error('Error during login:', error);
            setLoginStatus('An error occurred.');
          }
        };
      
        return (
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
            {loginStatus && <p>{loginStatus}</p>}
          </form>
        );
      }
      
      export default LoginForm;
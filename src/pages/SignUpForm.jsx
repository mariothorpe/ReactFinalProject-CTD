import React, { useState } from 'react';

// const url = `https://api.airtable.com/v0/${import.meta.env.VITE_BASE_ID3}/${
//     import.meta.env.VITE_TABLE_NAME3
//   }`;
//   const token = `Bearer ${import.meta.env.VITE_PAT3}`;

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username && email && password) {
      console.log('Signup data:', { username, email, password });
      // In a real application, you would send this data to a server
      alert('Sign up successful!');
      // Optionally clear the form
      setUsername('');
      setEmail('');
      setPassword('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;


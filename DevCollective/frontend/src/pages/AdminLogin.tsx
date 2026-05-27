import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo: Save credentials to localStorage if not set, otherwise check
    const stored = localStorage.getItem('adminAuth');
    if (stored) {
      const { username: u, password: p } = JSON.parse(stored);
      if (username === u && password === p) {
        sessionStorage.setItem('adminAuthed', 'true');
        navigate('/admin');
      } else {
        setError('Invalid username or password');
      }
    } else {
      localStorage.setItem('adminAuth', JSON.stringify({ username, password }));
      sessionStorage.setItem('adminAuthed', 'true');
      navigate('/admin');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="font-semibold">Username</span>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="font-semibold">Password</span>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="mt-1 block w-full border rounded px-3 py-2"
            required
          />
        </label>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 w-full"
        >
          Login / Register
        </button>
      </form>
    </div>
  );
}

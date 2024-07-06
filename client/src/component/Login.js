import React, { useState, useContext } from 'react';
import { AppContext } from './AppContext';

export default function Login() {
  const { users, setCurrentUser } = useContext(AppContext);
  const [form, setForm] = useState({
    Username: '',
    Password: ''
  });
  const [loginMessage, setLoginMessage] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  }

  function handleLogin() {
    const user = users.find(user => user.Username === form.Username && user.Password === form.Password);
    if (user) {
      setCurrentUser(user);
      setLoginMessage('Login Successful');
    } else {
      setLoginMessage('Login Failed');
    }
  }

  return (
    <form className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
      <div className="mb-4">
        <h1>{loginMessage}</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Username">
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          name="Username"
          type="text"
          placeholder="Enter your username"
          onChange={handleChange}
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          name="Password"
          type="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

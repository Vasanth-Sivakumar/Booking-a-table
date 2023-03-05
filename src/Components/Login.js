import { React, useState } from 'react';
import "./Main.css";

export function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('Submitted', username, password);
  };

  const toggleLoginSignup = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-container">
      <h2 className='heading2'>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p className='loginpara'>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button type="button" onClick={toggleLoginSignup}>
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
}


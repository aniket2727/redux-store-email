



// LoginComponent.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../features/userSlice';

const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    // Assuming email is obtained from a form or input field
    dispatch(loginUser(email));
  };

  return (
    <div>
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;

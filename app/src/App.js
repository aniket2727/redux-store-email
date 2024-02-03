import React from 'react';
import { useSelector } from 'react-redux';
import LoginComponent from './componets/LoginComponet';
import AnotherComponent from './componets/AnotherComponets';

const App = () => {
  // Use useSelector to get the email from the Redux store

  return (
    <div>
        <AnotherComponent />
        <LoginComponent />
  
    </div>
  );
};

export default App;

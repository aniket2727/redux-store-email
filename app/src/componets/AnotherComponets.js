


// AnotherComponent.js

import React from 'react';
import { useSelector } from 'react-redux';

const AnotherComponent = () => {
  const userEmail = useSelector((state) => state.user.email);

  return (
    <div>
      <p> another componets User Email: {userEmail}</p>
    </div>
  );
};

export default AnotherComponent;

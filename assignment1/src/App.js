import React, { useState } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

function App() {

  const [outputs, setOutputs] = useState(
    [
      { username: 'Andy', like: 'pizza' },
      { username: 'Sarah', like: 'cats' }
    ]
  );

  const handleNameChange = (event) => {
    setOutputs({
      outputs: [
        { username: event.target.value, like: 'pizza' },
        { username: 'Sarah', like: 'cats' }
      ]
    });
  }

  return (
    <div className="App">
      <UserOutput uname={outputs[0].username} like={outputs[0].like} />
      <UserOutput uname={outputs[1].username} like={outputs[1].like} />
      <UserInput newName={handleNameChange} />
    </div>
  );
}

export default App;

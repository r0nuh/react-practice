import React, { useState } from 'react';
import Person from './Person/Person';
import { app } from './App';
const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Szilard', age: 35 },
      { name: 'Peter', age: 33 },
      { name: 'Dorka', age: 3 }
    ]
  });
  const handleNameChange = () => {
    setPersonsState({
      persons: [
        { name: 'Hunor', age: 35 },
        { name: 'Peter', age: 33 }
      ]
    });
  };
  // render() {
  return (<div className="App">

    <h1>Hi! I'm a React App</h1>

    <button onClick={handleNameChange}>Swtich Name</button>

    <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
    <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is: making music</Person>
    <Person name="Dorka" age="3" />
  </div>);
};
// }
export default app;

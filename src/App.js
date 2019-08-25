import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Szilard', age: 35 },
      { name: 'Peter', age: 33 },
      { name: 'Dorka', age: 3 }
    ]
  }

  handleNameChange = () => {
    this.setState({
      persons: [
        { name: 'Hunor', age: 35 },
        { name: 'Peter', age: 33 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a {this.props.name}</h1>
        <button onClick={this.handleNameChange}>Swtich Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobby is: making music</Person>
        <Person name="Dorka" age="3" />
      </div>
    );
  }
}

export default App;

// HOW TO MANGE STATE IN A FUNCTIONAL COMPONENT

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';

// const app = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: 'Szilard', age: 35 },
//       { name: 'Peter', age: 33 },
//       { name: 'Dorka', age: 3 }
//     ]
//   });

//   const handleNameChange = () => {
//     setPersonsState({
//       persons: [
//         { name: 'Hunor', age: 35 },
//         { name: 'Peter', age: 33 },
//         { name: 'Dorka', age: 3 }
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hi! I'm a React App</h1>
//       <button onClick={handleNameChange}>Swtich Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobby is: making music</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// }

// export default app;
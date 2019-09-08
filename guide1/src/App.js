import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Szilard', age: 35 },
      { name: 'Peter', age: 33 },
      { name: 'Dorka', age: 3 }
    ],
    showPersons: false
  }

  handleNameChange = (event) => {
    this.setState({
      persons: [
        { name: 'Szilard', age: 35 },
        { name: event.target.value, age: 23 }
      ]
    })
  }

  handlePersonDelete = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const show = this.state.showPersons;
    this.setState({ showPersons: !show });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.handlePersonDelete(index)}
            name={person.name} 
            age={person.age}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi! I'm a {this.props.appName}</h1>
        <button
          style={style}
          onClick={this.toggleNameHandler}>Toggle Name</button>
        {persons}
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
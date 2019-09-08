import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Szilard', age: 35 },
      { id: '2', name: 'Peter', age: 33 },
      { id: '3', name: 'Dorka', age: 3 }
    ],
    showPersons: false
  }

  handleNameChange = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
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
            key={person.id}
            name={person.name} 
            age={person.age}
            changed={(event) => this.handleNameChange(event, person.id)}/>
          })}
        </div>
      );
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

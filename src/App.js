import React from "react";
import { Button } from "@material-ui/core";
import './App.css';

class App extends React.Component{
  constructor (){
  super();


    this.state = {
      employees: []
    };  
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({employees: users}));
  }

  render() {
    return (
      <div className="App">
       <h1>My App</h1>
        {this.state.employees.map(employee => (
          <h2 key={employee.id}> {employee.name} </h2>))}
      </div>
    );
  }
}



export default App;

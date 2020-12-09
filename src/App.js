import React from "react";
import { Button } from "@material-ui/core";
import './App.css';
import CardList from './components/card-list/card-list'

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
        <CardList 
          users={this.state.employees}
        />
      </div>
    );
  }
}



export default App;

import React from "react";
import { Button } from "@material-ui/core";
import './App.css';

class App extends React.Component{
  constructor (){
  super();
    this.state = {
      employees: [
        {
          name: 'Jann Mcihael Albite',
          id: '16-0705'
        },
        {
          name: 'Regine Eunice Raganas',
          id: '17-0595'
        }
      ]
    }  
  }

  render() {
    return (
      <div className="App">
       <h1>My App</h1>
        {this.state.employees.map(employee => (
          <h2 key={employee.id}> {employee.name} </h2>
            ))}
      </div>
    );
  }
}



export default App;

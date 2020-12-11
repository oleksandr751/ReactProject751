import './App.css';
import Todos from './components/Todos'
import React, { Component } from 'react';
class App extends Component {
  state = { 
    todos : [
        {
            id: 1,
            title: "Study Javascript",
            completed: "false"
        },
        {
            id: 2,
            title: "Learn German",
            completed: "false"
        },
        {
            id: 3,
            title: "Go to sleep",
            completed: "false"
        }
    ]
 }
  render() { 
    console.log(this.state.todos);
    return ( 
    
    <div className="App">
    <Todos todos= {this.state.todos}/>
    </div> );
  }
}
 


export default App;

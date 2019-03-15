import React, { Component } from 'react';
// import ToDo from './ToDolist/todo';
import './App.css';
import Loop from './Life-cycle/lifeCycle';
// import Login from './inputs/mainPage';


class App extends Component {
  state={
    ask: false
  }
  remove = () =>{
    this.setState({
      ask: true
    })
  }
  add = () =>{
    this.setState({
      ask:false
    })
  }
  render() {
    return (
      <div className="App">
         
         {this.state.ask? null: <Loop/>}
         <button onClick={this.remove}>CliCK1</button>
         <button onClick={this.add}>CliCK</button>
      </div>
    );
  }
}

export default App;

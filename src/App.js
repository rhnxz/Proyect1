import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';

import TodoForm from './components/TodoForm';

class App extends Component {
 constructor() {
  super();
  this.state = {
    todos
  };
  this.handleAddTodo = this.handleAddTodo.bind(this);
 }
  
 handleAddTodo(todos) {
this.state({
  todos: [...this.state.todos, todos]
})
 }

 render() {
    const todos = this.state.todos.map((todos, i) => {
      return (
        <div className="col-md-4">
         <div className="card mt-4">
          <div className="card-header">
           <h3>{todos.title}</h3>
           <span className="badge badge-pill badge-danger ml-2">
           {todos.priority}
          </span>
        </div>
        <div className="card-body">
        <p>{ todos.description }</p>
        <mark>{ todos.responsibe }</mark>
            </div>
          </div>
      </div>
          )
    })

        return (
      <div className="App">
      
      <nav className="navbar navbar-dark bg-dark">
      <a href="" className="text-white">
      Tareas
      <span className="badge badge-pill badge-light ml-2">
          { this.state.todos.length }
        </span>
       </a>
      </nav>

      <div className="container">
      <div className="row mt-4">
      <div className="col-md-3">
      <img src={logo} className="App-logo" alt="logo" />
      <TodoForm onAddTodo={this.handleAddTodo}/>
      </div>
      <div className="col-md-9">
      <div className="row">
      { todos }
      </div>
      </div>
      </div>
      </div>
      </div>

    );
  }
}

export default App;

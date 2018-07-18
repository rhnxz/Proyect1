import React, { Component } from 'react';

class TodoForm extends Component {
constructor() {
    super();
    this.state = {
        title: '',
        responsible: '',
        description: '',
        priority: 'Baja'
};
this.handleimput = this.handleimput.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleimput(e) {
    const { value, name } = e.target;
     this.setState({
        [name]: value       
     }) 
    }

    handleSubmit(e) {
        e.preventDefault();
      this.props.onAddTodos(this.state);
        console.log('Enviando Datos...');
    }

render () {
    return (
        <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
        <div className="form-group">
        <imput
        type="text"
        name="Title"
        onChange={ this.handleimput }
        className="form-control"
        placeholder="title"
        />
        </div>
        <div className="form-group">
        <imput
        type="text"
        name="responsibe"
        className="form-conntrol"
        placeholder="responsibe"
        onChange={ this.handleimput }
        />
        </div>
        <div className="form-group">
        <imput
        type="text"
        name="description"
        onChange={ this.handleimput }
        />
        </div>
        <div className="form-control">
        <select
        name="priority"
        className="form-control"
        onChange={ this.handleimput }
        >
        <option>Baja</option>
        <option>Media</option>
        <option>Alta</option>
        </select>
        </div>
        </form>
        </div>
      )
     }
    }

    export default TodoForm;


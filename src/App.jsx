import React, { Component } from 'react';
import { Form } from './Form';
import { List } from './List';
import { SingleTodo } from './SingleTodo';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: '',
      priority: '',
    }

    this.count = 0;
    this.handleButtonClick =  this.handleButtonClick.bind(this);
    this.handlePriority = this.handlePriority.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  handleButtonClick(e) {
    e.preventDefault();
    if (this.state.text == '') {
        return false;
    }

    const newTodo = {
        id: this.count++,
        value: this.state.text,
        priority: this.state.priority,
        isEditing: false
    };

    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos, text: '' });
  }

  handlePriority(e) {
    this.setState({ priority: e.target.value });
  }

  onInputChange(e) {
    this.setState({ text: e.target.value });
  }

  deleteTodo(index) {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({tasks: newTodos });
  }

  handleEdit(id) {
    let newTodos = this.state.todos.slice();
    let index = newTodos.findIndex(todo => todo.id === id);

    newTodos[index].isEditing = !newTodos[index].isEditing;
    this.setState({ todos: newTodos });
  }

  handleCancel() {
    this.setState({ isEditing: false });
  }

  handleSave(id, text, priority) {
    let newTodos = this.state.todos.slice();
    let index = newTodos.findIndex(todo => todo.id === id);

    newTodos[index].value = text;
    newTodos[index].priority = priority;
    newTodos[index].isEditing = false;

    this.setState({ todos: newTodos });
  }

  render(){
      return (
        <div className='container'>
            <div className='container top'>
                <h1 className='display-4'>Very Simple ToDo App</h1>
                <p className='lead'>Track all of the things</p>
                <hr className='my-4'></hr>
            </div>

            <div className='row'>
                <Form 
                    priority={this.state.priority}
                    changePriority={this.handlePriority}
                    text={this.state.text}
                    onInputChange={this.onInputChange}
                    handleButtonClick={this.handleButtonClick} />

                <List
                    todos={this.state.todos}
                    handleEdit={this.handleEdit}
                    deleteTodo={this.deleteTodo}
                    save={this.handleSave} />
            </div>
        </div>   
      )
  }
}

export default App;

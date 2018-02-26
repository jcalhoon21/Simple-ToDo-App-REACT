import React, { Component } from 'react';
import SingleTodo from './SingleTodo';
import FaIconPack from 'react-icons/lib/fa';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: '',
      select: ''
    };

    this.handleButtonClick =  this.handleButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    
  }

  onInputChange(e) {
    this.setState({ currentTodo: e.target.value });
  }

  onSelect(e) {
    console.log("this.state.select: ",e.target.value);
    this.setState({ select: e.target.value });
  }

  handleButtonClick() {
    let todosCopy = this.state.todos.slice();
    let todoInput = this.state.currentTodo;
    let todoPriority = this.state.select;
    let todoObj = {todoInput, todoPriority};
    todosCopy.push(todoObj);

    this.setState({ todos: todosCopy, currentTodo: '' })
  }

  deleteTodo(i) {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);

    this.setState({ todos: todosCopy });
  }

  render() {
    
    return (
      <div className='container'>
      
      
        <div className="container top">
          <h1 className="display-4">Very Simple ToDo App</h1>
          <p className="lead">Track all of the things</p>
          <hr className="my-4"></hr>
        </div>
      
     {/* Left Column - Add New ToDo */}   
      <div className="row">
        <div className="col-lg-4 rounded">
          <div className="card">
            
            <div className="card-header">
              Add New ToDo
            </div>
            
            <div className="card-body">
              
              <h5 className="card-title">I want to...</h5>
              
              <div className="form-group">
                <textarea 
                  className="form-control" 
                  value={this.state.currentTodo}
                  onChange={this.onInputChange}
                  id="exampleFormControlTextarea1" 
                  rows="3">
                </textarea>
              </div>
              
              <br />
              <h5 className="card-title">How much of a priority is this?</h5>
            
            
              <div className="form-group">
                <select 
                  className="custom-select"
                  defaultValue="none" 
                  onChange={this.onSelect}
                  id="exampleFormControlSelect1">
                    <option value="none">Select a Priority</option>
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
              </div>
              </div>
            
              <div className="card-footer">
                <button 
                      type="button" 
                      className="btn btn-success btn-lg btn-block" 
                      onClick={this.handleButtonClick}>
                Add
                </button>
              </div>
          
            
          </div>
        </div>

      

      {/* Right Column - View ToDos */}
      <div className="col-lg-8 rounded">
        <div className="card">
          <div className="card-header">View ToDos</div>

            {this.state.todos.length === 0 ? 
              <div className="card-title text-left alert alert-primary"><strong>Welcome to Very Simple Todo App!</strong><br />Get started now by adding a new todo on the left.
              
              </div>
            :
              <div><ul className="list-group">
              
              {this.state.todos.map((todo, i) => {
                return (
                  <SingleTodo key={i} todo={todo} delete={() => this.deleteTodo(i)} />
                );
              })}
              
              </ul></div>
            }

          </div>
        </div>
      </div>

      </div>
  

    );
  }
}

export default App;

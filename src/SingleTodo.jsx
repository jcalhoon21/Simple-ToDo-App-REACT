import React, { Component } from 'react';

class SingleTodo extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        var priority = this.props.todo.todoPriority;
        
        if(priority === "high"){
            priority = "danger"
        } else if(priority === "medium") {
            priority = "warning"
        } else {
            priority = "success"
        }
        
        return (
                
                <li className={`list-group-item list-group-item-${priority}`}>
                    {this.props.todo.todoInput}
                        <button onClick={this.props.delete}>
                            <i className="far fa-edit"></i>
                            
                        </button>
                </li>
            
            
            
        );
    }
}

export default SingleTodo;
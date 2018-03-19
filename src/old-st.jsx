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
            <div>
                <li className={`list-group-item list-group-item-${priority}`}>
                    {this.props.todo.todoInput}
                        <button onClick={this.props.delete}>
                            <svg className="icon icon-bin"><use href="#icon-bin"></use></svg>
                        </button>
                        <button onClick={this.props.edit}>
                            <svg className="icon icon-pencil"><use href="#icon-pencil"></use></svg>
                        </button>
                </li>
            </div>
            
            
        );
    }
}

export default SingleTodo;
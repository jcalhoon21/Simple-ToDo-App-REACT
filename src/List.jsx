import React, { Component } from 'react';
import { SingleTodo } from './SingleTodo';

export class List extends Component {
  
  render() {
    return (
        <div className='col-lg-8 rounded'>
            <div className='card'>
                <div className='card-header'>View ToDos</div>
                {this.props.todos && this.props.todos.map((todo, index) => {
                    return (
                        <SingleTodo
                            key={index}
                            id={index}
                            todo={todo}
                            isEditing={this.isEditing}
                            priority={this.priority}
                            handleEdit={this.props.handleEdit}
                            delete={this.props.deleteTodo}
                            save={this.props.save} />
                    )
                })}
            </div>
        </div>
    )
  }
}

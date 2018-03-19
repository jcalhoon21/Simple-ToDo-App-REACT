import React, { Component } from 'react';
import { Form } from './Form';

export class SingleTodo extends Component {
    constructor(props) {
        super();

        this.state = {
            editText: props.todo.value,
            editPriority: props.todo.priority,
            isEditing: false
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.handleText = this.handleText.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.delete = this.delete.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleText(e) {
        this.setState({ editText: e.target.value })
    }

    handlePriority(e) {
        this.setState({ editPriority: e.target.value })
    }

    handleEdit(e) {
        this.props.handleEdit(parseInt(e.target.id));
    }

    delete(key) {
        this.props.delete(key);
    }

    handleSave(e) {
        e.preventDefault();
        this.props.save(parseInt(e.target.id), this.state.editText, this.state.editPriority);
        console.log(this.handleSave, "save button");
    }

    render() {
        if (this.props.isEditing === true) {
            return (
                <div className='container'>
                    <div className='col-lg-8 rounded'>
                        <div className='card bg-light text-dark'>
                            <textarea
                                className='form-control'
                                ref='editedText'
                                defaultValue={this.props.todo.value}
                                onChange={this.handleText}>
                            </textarea>
                            <select
                                defaultValue={this.props.todo.priority}
                                onChange={this.handlePriority}>
                                <option value='none'>Select a Priority</option>
                                <option className='alert-success' value='alert-success'>Low</option>
                                <option className='alert-warning' value='alert-warning'>Medium</option>
                                <option className='alert-danger' value='alert-danger'>High</option>
                            </select>
                            <button
                                className='btn btn-success'
                                id={this.props.todo.id}
                                onClick={this.handleSave}>
                                Save Changes
                            </button>
                            <button
                                className='btn btn-warning'
                                id={this.props.todo.id}
                                onClick={this.handleEdit}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div id='list-group' className={`todos ${this.props.todo.priority}`}>
                    
                    <li className="list-group-item">{this.props.todo.value}
                        <img id='img-delete'
                            onClick={() => this.props.delete(this.props.id)}
                            src='https://cdn.onlinewebfonts.com/svg/img_83432.png'
                            alt='' />
                        
                        
                        <img id='img-edit'
                            onClick={() => this.props.handleEdit(this.props.id)}
                            src='https://cdn1.iconfinder.com/data/icons/flat-web-browser/100/edit-button-512.png'
                            alt='' />
                    </li>
                </div>
            );
        }
    }
}

import React from 'react';
import { List } from './List';
import { SingleTodo } from './SingleTodo';

export class Form extends React.Component {

    render() {
        return (
            
                <div className='col-lg-4 rounded'>
                    <div className='card'>
                        <div className='card-header'>
                            Add New ToDo
                        </div>
                        
                        <div className='card-body'>
                            <h5 className='card-title'>I want to...</h5>
                            <form className='form-group'>
                                <textarea 
                                    className='form-control'
                                    value={this.props.text}
                                    onChange={(e) => this.props.onInputChange(e)}
                                    id='exampleFormControlTextarea1' 
                                    rows='3' >
                                </textarea>
                                
                                <br />
                                <h5 className='card-title'>How much of a priority is this?</h5>

                                <select 
                                    className='custom-select'
                                    defaultValue='none'
                                    onChange={this.props.changePriority}>
                                        <option value='none'>Select a Priority</option>
                                        <option className='alert-success' value='alert-success'>Low</option>
                                        <option className='alert-warning' value='alert-warning'>Medium</option>
                                        <option className='alert-danger' value='alert-danger'>High</option>
                                </select>
                                <div className='card-footer'>
                                    <button 
                                        className='btn btn-success btn-lg btn-block'
                                        onClick={(e) => this.props.handleButtonClick(e)} >
                                    Add
                                    </button>
                                </div>
                            </form>
                            
                        </div>

                        
                    </div>
                </div>
            
        )
    }
}
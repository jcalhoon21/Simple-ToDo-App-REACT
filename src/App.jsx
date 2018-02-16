import React, { Component } from 'react';
// import ToDoList from '/ToDoList';

export class App extends Component {

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
              
              <div class="form-group">
                <textarea 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  // onChange={}
                  >
                </textarea>
              </div>
              
              <br />
              <h5 className="card-title">How much of a priority is this?</h5>
            
              <div className="form-group">
                <select 
                  className="custom-select" 
                  id="exampleFormControlSelect1">
                    <option selected>Select a Priority</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
              </div>
              </div>
            
              <div className="card-footer">
                <button 
                      type="button" 
                      className="btn btn-success btn-lg btn-block" 
                      // onClick={this.add}
                >Add
                </button>
              </div>
          
            
          </div>
        </div>

      

      {/* Right Column - View ToDos */}
      <div className="col-lg-8 rounded">
        <div className="card">
          <div className="card-header">View ToDos</div>
          
            {/* <div className={`card-title text-center alert alert-${this.state.change.total >= 0 ? 'success' : 'danger'}`} role="alert">
              The total change due is: ${this.state.change.total}
            </div> */}

          </div>
        </div>
      </div>

      </div>
  

    );
  }
}

export default App;

import React from 'react';

class BadgeForm extends React.Component {

  state = {};

  handleChange = e => {
    // console.log({
    //   name: e.target.name,
    //   value: e.target.value
    // });
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value
    });
  }

  handleClick = e => {
    console.log('Le diste click');
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  }
  
  render() {
    return(
      <div>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input 
              className="form-control" 
              type="text" 
              name="firstName"
              onChange={this.handleChange}
              value={this.state.firstName} 
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input 
              className="form-control" 
              type="text" 
              name="lastName"
              onChange={this.handleChange}
              value={this.state.lastName} 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              className="form-control" 
              type="email" 
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label>Job Title</label>
            <input 
              className="form-control" 
              type="text" 
              name="jobTitle"
              onChange={this.handleChange}
              value={this.state.jobTitle}
            />
          </div>

          <div className="form-group">
            <label>Twitter</label>
            <input 
              className="form-control" 
              type="text" 
              name="twitter"
              onChange={this.handleChange}
              value={this.state.twitter}
            />
          </div>
          <button 
            onClick={this.handleClick} 
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
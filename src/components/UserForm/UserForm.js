import React, { Component } from 'react';
import './UserForm.css';

class UserForm extends Component {

  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  }

  render() {
    return (
      <div className="app">
        <h1>App</h1>
      </div>
    );
  }
}

export default UserForm;

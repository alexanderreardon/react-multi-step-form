import React, { Component } from 'react';
import './UserForm.css';
import UserDetails from '../UserDetails/UserDetails';
import PersonalDetails from '../PersonalDetails/PersonalDetails';
import Confirm from '../Confirm/Confirm';
import Success from '../Success/Success';

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

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    })
  }

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch(step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange} 
            values={values}
            /> )
      case 2:
        return (
          <PersonalDetails 
            nextStep={this.nextStep}
            prevStep={this.prevStep} 
            handleChange={this.handleChange} 
            values={values}
          /> )
      case 3:
        return(
          <Confirm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}  
            values={values}
          /> )
      case 4:
        return <Success />
    };
  }
}

export default UserForm;

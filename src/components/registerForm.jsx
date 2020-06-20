import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';

class RegisterForm extends Form {
  state = {
    data: {
      username: '',
      email: '',
      password: ''
    },
    type: 'password',
    eye: 'fa fa-eye-slash',
    errors: {}
  };
  schema = {
    username: Joi.string().required().min(4).label('User name'),
    email: Joi.string().required().regex(/(.+)@(.+){2,}\.(.+){2,}/).label('Email'),
    password: Joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).label('Password'),
  };
  doSubmit = () => {
    //call server
    console.log("submitted");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form className="col-6" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "User Name")}
          {this.renderInput("email", "Email")}
          {this.renderPassword("password", "Password")}
          {this.renderButton('Register')}
        </form>
      </React.Fragment>
    );
  }
}

export default RegisterForm;



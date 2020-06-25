import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import RegisterInfo from './registerInfo';
import * as userService from '../services/userService';
import auth from '../services/authService';


class RegisterForm extends Form {
  state = {
    data: {
      email: '',
      password: '',
      name: ''
    },
    type: 'password',
    eye: 'fa fa-eye-slash',
    errors: {}
  };
  schema = {
    email: Joi.string().required().regex(/(.+)@(.+){2,}\.(.+){2,}/).label('Email'),
    password: Joi.string().required().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).label('Password'),
    name: Joi.string().required().min(4).label('User name'),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data);
      auth.loginWithJwt(response.headers['x-auth-token']);
      window.location = '/';
    }
    catch (ex) {
      if(ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.email = "A user with this email already exists.";
        this.setState({errors});
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <div className="row">
          <form className="col-5" onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
            {this.renderPassword("password", "Password")}
            {this.renderInput("name", "User Name")}
            {this.renderButton('Register')}
          </form>
          <RegisterInfo/>
        </div>
      </React.Fragment>
    );
  }
}

export default RegisterForm;



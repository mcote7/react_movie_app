import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import LoginInfo from './loginInfo';

class LoginForm extends Form {
  state = {
    data: {
      username: '',
      password: ''
    },
    type: 'password',
    eye: 'fa fa-eye-slash',
    errors: {}
  };
  schema = {
    username: Joi.string().min(4).required().label('User name'),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).label('Password')
  };
  doSubmit = () => {
    //call server
    console.log("submitted");
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <div className="row">
          <form className="col-5" onSubmit={this.handleSubmit}>
            {this.renderInput("username", "User Name")}
            {this.renderPassword("password", "Password")}
            {this.renderButton('Login')}
          </form>
          <LoginInfo/>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginForm;

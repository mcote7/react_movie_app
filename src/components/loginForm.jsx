import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import LoginInfo from './loginInfo';
import {login} from '../services/authService';

class LoginForm extends Form {
  state = {
    data: {
      email: '',
      password: ''
    },
    type: 'password',
    eye: 'fa fa-eye-slash',
    errors: {}
  };
  schema = {
    email: Joi.string().required().regex(/(.+)@(.+){2,}\.(.+){2,}/).label('Email'),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).label('Password')
  };
  doSubmit = async () => {
    try {
      const {data} = this.state;
      await login(data.email, data.password);
    }
    catch (ex) {
      if(ex.response && ex.response.status === 400) {
        const errors = {...this.state.errors};
        errors.email = ex.response.data;
        this.setState({errors});
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <div className="row">
          <form className="col-5" onSubmit={this.handleSubmit}>
            {this.renderInput("email", "Email")}
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

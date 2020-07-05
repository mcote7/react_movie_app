import React from 'react';
import Form from './common/form';
import {Redirect} from 'react-router-dom';
import Joi from 'joi-browser';
import LoginInfo from './loginInfo';
import auth from '../services/authService';

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
      await auth.login(data.email, data.password);
      const {state} = this.props.location;
      window.location = state ? state.from.pathname : '/';
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
    if(auth.getCurrentUser()) return <Redirect to="/"/>;
    return (
      <React.Fragment>
        <h1 className="formTitle">Login</h1>
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

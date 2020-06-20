import React from 'react';
import Form from './common/form';
import Joi from 'joi-browser';
import Input from './common/input';
import Password from './common/password';

class LoginForm extends Form {
  state = {
    data: { username: '', password: ''},
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
  handleVisable = () => {
    this.state.type === 'password' ?
    this.setState({type: 'text', eye: 'fa fa-eye icon'}) :
    this.setState({type: 'password', eye: 'fa fa-eye-slash'});
  };
  render() {
    const {data, errors, type, eye} = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form className="col-6"
        onSubmit={this.handleSubmit}>
          <Input error={errors.username}
          name="username" value={data.username}
          label="User Name" onChange={this.handleChange}/>
          <Password error={errors.password}
          name="password" value={data.password}
          label="Password" onChange={this.handleChange}
          eye={eye} type={type} onVisable={this.handleVisable}/>
          <button disabled={this.validate()}
          className="btn btn-primary col-6">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import Input from './common/input';
import Password from './common/password';

class LoginForm extends Component {
  state = {
    account: { username: '', password: ''},
    type: 'password',
    eye: 'fa fa-eye-slash',
    errors: {}
  }
  validate = () => {
    const errors = {};
    const {account} = this.state;
    if(account.username.trim() === "")
      errors.username = "user required . . ."
    if(account.password.trim() === "")
      errors.password = "password required . . ."
    return Object.keys(errors).length === 0 ? null : errors;
  }
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({errors: errors || {}})
    if(errors) return;
    //call server
    console.log("submitted");
  };
  validateProperty = ({name, value}) => {
    if(name === "username") {
      if(value.trim() === "") return "User name required";
      if(value.length < 4) return "User name must be at least 4 letters long";
    }
    if(name === "password") {
      if(value.trim() === "") return "Password required";
      if(value.length < 8) return "Password must be at least 8 letters long";
    }
  }
  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty(input);
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account, errors});
  };
  handleVisable = () => {
    this.state.type === 'password' ?
    this.setState({type: 'text', eye: 'fa fa-eye icon'}) :
    this.setState({type: 'password', eye: 'fa fa-eye-slash'});
  };
  render() {
    const {account, errors, type, eye} = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form className="col-6"
        onSubmit={this.handleSubmit}>
          <Input error={errors.username}
          name="username" value={account.username}
          label="User Name" onChange={this.handleChange}/>
          <Password error={errors.password}
          name="password" value={account.password}
          label="Password" onChange={this.handleChange}
          eye={eye} type={type} onVisable={this.handleVisable}/>
          <button className="btn btn-primary col-3">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './common/input';
import Password from './common/password';

class LoginForm extends Component {
  state = {
    account: { username: '', password: ''},
    type: 'password',
    eye: 'fa fa-eye-slash',
    errors: {}
  };
  schema = {
    username: Joi.string().min(4).required().label('User name'),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/).label('Password')
  };
  validate = () => {
    const options = {abortEarly: false};
    const {error} = Joi.validate(this.state.account, this.schema, options);
    // console.log("error", error)
    if(!error) return null;
    const errors = {};
    for(let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;
  };
  validateProperty = ({name, value}) => {
    const obj = {[name]: value};
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate(obj, schema);
    console.log({error})
    if(error && error.details[0].message.includes('match'))
    error.details[0].message = '"Password" must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter.';
    return error ? error.details[0].message : null;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({errors: errors || {}})
    if(errors) return;
    //call server
    console.log("submitted");
  };
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
          <button disabled={this.validate()}
          className="btn btn-primary col-3">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

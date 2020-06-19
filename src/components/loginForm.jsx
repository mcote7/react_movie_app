import React, { Component } from 'react';
import Input from './common/input';
import Password from './common/password';

class LoginForm extends Component {
  state = {
    account: { username: '', password: ''},
    type: 'password',
    eye: 'fa fa-eye-slash'
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };
  handleChange = ({currentTarget: input}) => {
    const account = {...this.state.account};
    account[input.name] = input.value;
    this.setState({account});
  };
  handleVisable = () => {
    this.state.type === 'password' ?
    this.setState({type: 'text', eye: 'fa fa-eye icon'}) :
    this.setState({type: 'password', eye: 'fa fa-eye-slash'});
  };
  render() {
    const {account, type, eye} = this.state;
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form className="col-6"
        onSubmit={this.handleSubmit}>
          <Input name="username" value={account.username}
          label="User Name" onChange={this.handleChange}/>

          <Password name="password" value={account.password}
          label="Password" onChange={this.handleChange}
          eye={eye} type={type} onVisable={this.handleVisable}/>

          <button className="btn btn-primary col-3">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

import React, { Component } from 'react';

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
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input autoFocus value={account.username}
            onChange={this.handleChange} name="username"
            id="username" type="text" className="form-control"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div class="input-group-prepend">
              <input value={account.password}
              onChange={this.handleChange} name="password"
              id="password" type={type} className="form-control"/>
              <div onClick={this.handleVisable}
              className="input-group-text btn">
              <i className={eye} aria-hidden="true"></i></div>
            </div>
          </div>
          <button className="btn btn-primary col-3">Login</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;

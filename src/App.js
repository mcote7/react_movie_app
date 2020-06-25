import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Footer from './components/common/footer';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import Logout from './components/logout';
import RegisterForm from './components/registerForm';
import ScrollToTop from 'react-router-scroll-top';
import auth from './services/authService';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {

  state = {}

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({user})
  };

  render() {
    return (
    <React.Fragment>
      <NavBar user={this.state.user}/>
      <ToastContainer/>
        <main className="container p-5 my-4 myCard">
          <ScrollToTop/>
          <Switch>
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/login" component={LoginForm}/>
            <Route exact path="/logout" component={Logout}/>
            <Route exact path="/movies/:id" component={MovieForm}/>
            <Route exact path="/movies" component={Movies}/>
            <Route exact path="/customers" component={Customers}/>
            <Route exact path="/rentals" component={Rentals}/>
            <Route exact path="/not-found" component={NotFound}/>
            <Redirect from="/" exact to="/movies"/>
            <Redirect to="/not-found"/>
          </Switch>
        </main>
      <Footer/>
    </React.Fragment>
    );
  }
}
export default App;
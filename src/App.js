import React, { Component } from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Footer from './components/common/footer';
import NavBar from './components/navBar';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notFound';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import ScrollToTop from 'react-router-scroll-top'
import './App.css'

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <NavBar/>
        <main className="container p-5 my-4 myCard">
          <ScrollToTop/>
          <Switch>
            <Route exact path="/register" component={RegisterForm}/>
            <Route exact path="/login" component={LoginForm}/>
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
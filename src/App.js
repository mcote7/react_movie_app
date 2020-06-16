import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import Footer from './components/common/footer';
import NavBar from './components/common/navBar';

class App extends Component {
  render() {
    return (
  <div>
    <NavBar/>
      <main className="container p-5 my-4 myContainer">
        <Movies/>
      </main>
    <Footer/>
  </div>
    );
  }
}
export default App;
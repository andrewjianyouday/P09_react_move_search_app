import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import store from './store';
import {HashRouter as Router} from 'react-router-dom'


class App extends Component {
  render(){
    return(
      <Provider store = {store} >
        <Router>
          <div>
            <Navbar/>
            <Landing/>
            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

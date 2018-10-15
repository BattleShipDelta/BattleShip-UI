import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Auth from './components/auth';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          <Router exact path='/auth/:type' component={Auth}/>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormMovie from './component/FormMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
     
        <FormMovie />
      </div>
    );
  }
}

export default App;

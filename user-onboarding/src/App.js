import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormFunction from './Form.js';

function App() {
  return (
    <div className="App">
      
        <img src={logo} className="App-logo" alt="logo" />
       
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      
      <FormFunction />
    </div>
  );
}

export default App;

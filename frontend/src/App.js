import React from 'react';
import './App.css';
import logo from './assets/logo.svg';

/*
function App() {
  return (
    <h1>hello</h1>
  );
}
*/

function App() {
  return (
    <div className="container">

      {/* {someName} is javascript */}
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Offer <strong>spots</strong> to programmers and find talented souls for you company
        </p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email"
            id="email"
            placeholder="put your email here"
          />
          <button type="submit" class="btn">Enter</button>
        </form>
      </div>

    </div>
  );
}

export default App;

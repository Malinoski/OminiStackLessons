import React from 'react'; // useState allow to use states in our app
// import api from './services/api'
import './App.css';
import logo from './assets/logo.svg';
import Routes from './routes'; 

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

        <Routes/>
        
      </div>

    </div>
  );
}

export default App;

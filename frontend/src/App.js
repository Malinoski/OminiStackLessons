import React, {useState}  from 'react'; // useState allow to use states in our app
// import api from './services/api'
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

  // A new state
  // P.s.: 
  // '' is a initial value for email
  // setEmail is a function to update the email variable
  const [email, setEmail] = useState(''); 

  function handleSubmit(event){    
    event.preventDefault(); // do not redirect to another page
    console.log("login debug");
    console.log(email);

  }

  return (
    <div className="container">

      {/* {someName} is javascript */}
      <img src={logo} alt="AirCnC"/>

      <div className="content">
        <p>
          Offer <strong>spots</strong> to programmers and find talented souls for you company
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email"
            id="email"
            placeholder="put your email here"
            onChange={event => setEmail(event.target.value)} // this is a "arrow function"
          />
          <button type="submit" className="btn">Enter</button>
        </form>
      </div>

    </div>
  );
}

export default App;

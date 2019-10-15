/*  
    react: "required library (globals)"
*/
import React from 'react';

/*
    react-dom for html tree elements and can be combined with others, 
    like: react-native for mobile and react-vr for virtual reality
*/
import ReactDOM from 'react-dom'; 

/* 
    An app component
*/
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


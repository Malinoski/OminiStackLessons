import React, {useState} from 'react';
import api from '../../sevices/api';

export default function Login(){

    // A new state
    // P.s.: 
    // '' is a initial value for email
    // setEmail is a function to update the email variable
    const [email, setEmail] = useState(''); 

    async function handleSubmit(event){    

        event.preventDefault(); // do not redirect to another page
        console.log("login debug");
        console.log(email); // from input

        // Lets call the api
        const response = await api.post('/sessions', { email })
        console.log(response);

        // Lets get the user id
        const {_id} = response.data;
        console.log(_id);

        // Lets store the user id for all app
        localStorage.setItem('user', _id);

    }

    return (

        <>
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
        </>
    )
}
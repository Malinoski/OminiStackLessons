import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom'
import api from '../../sevices/api';
import './styles.css';

export default function Dashboard(){
    
    /*
        Every variable in [] change (filter in example), the useEffect will execute
        If [] is empty, it will execute just once
    */
    /*
    useEffect(() => {

    }, [filter]);
    */

    const [spots, setSpots] = useState([]); // useState initialize with an empty array

   useEffect(() => {
       async function loadSpots() {
           const user_id = localStorage.getItem('user');
           const response = await api.get('/dashboard', {
               headers: { user_id }
           });

           console.log(response.data);
           setSpots(response.data)
       }

       loadSpots();

    }, []);

    // return <h1>Dashboard</h1>;
    
    return (
        <>
            <ul className="spot-list">
                {spots.map(spot => (
                    <li key={spot._id}>
                        <header style={ {backgroundImage: `url(${spot.thumbnail_url})`} } ></header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` : 'GRATUITO'}</span> {/* ternary if */}
                    </li>
                ))}
            </ul>
            
            <br/>

            <Link to="/new">
                <button className="btn">Cadastrar novo spot</button>
            </Link>
        </>
    )

}
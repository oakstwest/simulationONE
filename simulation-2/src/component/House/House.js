import React from 'react';
import './House.css';

export default function House(props) {



    return (
        <div>
            <p>Property Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.propertystate}</p>
            <p>Zipcode: {props.zipcode}</p>
            <button onClick={() => props.deleteProperty(props.id)}>Delete</button>

        </div>
    )
}

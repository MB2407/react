import React from 'react';
import './head.css';

const Head = ({ heading, details }) => {
    return (
        <div className='header-container'>
         
            <h1>{heading}</h1>
            <br/>
            <br/>
            <p>{details}</p>
        </div>
    );
};

export default Head;
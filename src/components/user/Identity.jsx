import React from 'react';
import '../../App.css';

const Identity = ({age, firstname, lastname, address, city, phoneNumber}) => {

    return (
        <div className='identity-container'>
            <h4 className='identity-name'>{firstname} {lastname}</h4>
            <p>{age} ans</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{phoneNumber}</p>
        </div>
    );
};

export default Identity;
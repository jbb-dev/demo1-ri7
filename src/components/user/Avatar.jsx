import React from 'react';
import '../../App.css';

const Avatar = (props) => {
  return (
    <img 
        className='avatar'
        src={props.image} 
        alt={''} 
    />
  );
};

export default Avatar;
import React from 'react'

const Input = ({ name, label, type, value, action }) => {
  return (
    <>
        <label htmlFor={name}>{label}</label>
        <input 
            type={type ? type : 'text'}
            name={name}
            value={value}
            onChange={action}
        />
    </>
  );
};

export default Input
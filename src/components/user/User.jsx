import React from 'react';
import Button from '../common/Button';
import './User.css';

const User = (props) => {

  const nameToDisplay = `Coucou ${props.name}`;

  const displayAlert = () => alert(nameToDisplay);

  return (
    <>
      <div className='student'>
          <p>{props.name}</p>
          <p>{props.age} ans</p>
          {props.isFromRI7 && 
            <p>Je suis de RI7</p>
          }
      </div>
      <Button 
        label='Cliquer' 
        action={displayAlert} 
      />
    </>

  )
}

export default User;
import React from 'react';
import { useState } from 'react';
import Button from './common/Button';

const Compteur = () => {

    const [ name, setName ] = useState('');
    const [ result, setResult ] = useState(0);

    const increment = () => setResult(result + 1);

    const decrement = () => setResult(result - 1);

    const saveName = (event) => {
        const value = event.target.value;
        setName(value);
    };

    const sendForm = (event) => {
        event.preventDefault();
        console.log('name = ', name);
    };

    return (
        <>
            <h3>Player name : {name}</h3>
            <form onSubmit={sendForm}>
                <input 
                    type='text'
                    value={name}
                    onChange={saveName}
                />
                <input type="submit" value="Envoyer" />
            </form>
            <p>Ceci est le résutat: {result}</p>
            <Button label="+" action={increment} />
            <Button label="-" action={decrement}/>
        </>
    );
};

export default Compteur;
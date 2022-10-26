import React, { useState } from 'react'
import './../App.css';
import Input from './Input';

const Register = () => {


    const regex = /\D+/;

    const testField = () => {
        const functionVerify = (user.lastname).match(regex);
        console.log('pas de digit = ',functionVerify )
    }

    const [user, setUser] = useState({
        lastname: "",
        age: "",
        email:""
    });

    const handleUser = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setUser({...user, [`${key}`] :  value});
    };

    const displayMyBirthdate = () => {
        const stringToDate = new Date(user.birthday)
        const year = stringToDate.getFullYear();
        const month = `0${stringToDate.getMonth() + 1}`;
        const day = stringToDate.getUTCDay();
        return `Je suis né le ${day} ${month} ${year}`
    };

    const sendForm = () => {
        const userInfo = `Mon nom est ${user.lastname} et j'ai ${user.age} ans`;
        alert(userInfo);
    };

    return (
        <div className='register'>
                            <button onClick={testField}>TEST REGEX</button>
            <form onSubmit={sendForm} className='register-content'>
                <h3>Formulaire d'inscription</h3>
                <Input 
                    label="Nom"
                    name='lastname'
                    value={user.lastname}
                    action={handleUser}
                />
                <Input 
                    label="Age"
                    name='age'
                    type='number'
                    value={user.age}
                    action={handleUser}
                />
                <Input 
                    label="Email"
                    name='email'
                    type='email'
                    value={user.email}
                    action={handleUser}
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
    }

export default Register
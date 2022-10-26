import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Time = () => {

    const [time, setTime] = useState(new Date());

    const modifyTime = () => setTime(new Date());

    const displayTime = () => {
        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        const localTime = time.toLocaleDateString('fr-FR', options);
        const formatedTime = localTime.slice(10);
        return formatedTime;        
    };

    useEffect(() => {
        setTimeout(() => modifyTime(), 1000)
    })

    return (
        <>
            <div>Il est : {displayTime()}</div>
        </>
    );
};

export default Time;
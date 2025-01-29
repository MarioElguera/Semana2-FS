'use client';
import React from 'react';

const BotonClick = () => {
    const handleClick = () => {
        console.log("¡Has hecho clic en el botón!");
    };

    return (
        <button onClick={handleClick}>Haz clic aquí</button>
    );
};

export default BotonClick;

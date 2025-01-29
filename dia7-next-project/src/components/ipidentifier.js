'use client';
import React, { useState } from 'react';

const LocalizadorIP = () => {
    const [ip, setIp] = useState('');
    const [info, setInfo] = useState(null);
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        setIp(e.target.value);
    };

    const isValidIp = (ip) => {
        const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        return regex.test(ip);
    };

    const obtenerInfoDeIp = async () => {
        if (!isValidIp(ip)) {
            setError('La IP ingresada no es válida');
            setInfo(null);
            return;
        }

        try {
            setError('');
            const response = await fetch(`http://ip-api.com/json/${ip}`);
            const data = await response.json();
            if (response.ok) {
                console.log("info => ", data);
                setInfo(data);
            } else {
                setError('No se pudo obtener la información de la IP');
                setInfo(null);
            }
        } catch (err) {
            setError('Error al intentar obtener la información => ', err);
            setInfo(null);
        }
    };

    return (
        <div>
            <h1>Localizador de IP</h1>
            <input
                style={{ color: 'black' }}
                type="text"
                placeholder="Introduce una IP"
                value={ip}
                onChange={handleInputChange}
            />
            <button onClick={obtenerInfoDeIp}>Buscar</button>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {info && (
                <div>
                    <h3>Información de la IP:</h3>
                    <p><strong>IP:</strong> {info.query}</p>
                    <p><strong>Ubicación:</strong> {info.city}, {info.region}, {info.country}</p>
                    <p><strong>Región:</strong> {info.regionName}</p>
                    <p><strong>Zona horaria:</strong> {info.timezone}</p>
                </div>
            )}
        </div>
    );
};

export default LocalizadorIP;

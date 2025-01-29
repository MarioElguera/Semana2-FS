'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSun, FaCloudRain, FaWind, FaCloudSun } from 'react-icons/fa';

const Header = () => {
    const [temperatura, setTemperatura] = useState(null);
    const [humedad, setHumedad] = useState(null);
    const [viento, setViento] = useState(null);
    const [lluvia, setLluvia] = useState(null);

    useEffect(() => {
        const url = "https://www.el-tiempo.net/api/json/v2/provincias/41/municipios/41001";

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTemperatura(data.temperatura_actual);
                setHumedad(data.humedad);
                setViento(data.viento);
                setLluvia(data.lluvia);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);

    const getClimaIcon = () => {
        if (lluvia > 0) {
            return <FaCloudRain size={30} color="blue" />;
        }
        if (viento > 20) {
            return <FaWind size={30} color="gray" />;
        }
        if (temperatura < 10) {
            return <FaCloudSun size={30} color="lightgray" />;
        }
        if (humedad > 80) {
            return <FaCloudSun size={30} color="gray" />;
        }
        if (temperatura >= 10 && temperatura <= 20) {
            return <FaCloudSun size={30} color="orange" />;
        }
        if (temperatura > 20) {
            return <FaSun size={30} color="yellow" />;
        }

        return null;
    };

    return (
        <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
            <nav style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <ul style={{ display: 'flex', listStyleType: 'none', margin: 0, padding: 0 }}>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/">Home</Link>
                    </li>
                    <li style={{ marginRight: '20px' }}>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div style={{ marginTop: '10px' }}>

                {temperatura && humedad ? (
                    <div style={{ display: 'flex' }}>
                        <a>
                            Temperatura: {temperatura} ºC | Humedad: {humedad} %
                        </a>
                        {getClimaIcon()}
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </div>
        </header>
    );
};

export default Header;

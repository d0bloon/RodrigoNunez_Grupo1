import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';

import Mistitulos from "./componentes/Titulos/Titulos.jsx";
import MisImagenes from "./componentes/Imagenes/Imagenes.jsx";
import Navbar from "./componentes/Navbar/Navbar.jsx";

function App() {
    return (
        <>
            <div className="background"></div>
            <div className="background1"></div>
            <div className="content">
                <Navbar/>
                <Mistitulos titulo='ZapStore'/>
                <MisImagenes src="/logo01.jpeg" alt="hola"/>
            </div>
        </>
    )
}

export default App

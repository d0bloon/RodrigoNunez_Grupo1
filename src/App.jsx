import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css';

import Mistitulos from "./componentes/Titulos/Titulos.jsx";
import MisImagenes from "./componentes/Imagenes/Imagenes.jsx";
import Navbar from "./componentes/Navbar/Navbar.jsx";
import Slider from "./componentes/Sliders/Sliders.jsx";

function App() {
    return (
        <>
            <Slider/>
            <Navbar/>
            <div className="background"></div>
            <div className="background1"></div>
            <div className="content">
                <MisImagenes src="/image03.png" alt="hola"/>
                <MisImagenes src="/image03.png" alt="hola"/>
                <MisImagenes src="/image03.png" alt="hola"/>
            </div>
        </>
    )
}

export default App

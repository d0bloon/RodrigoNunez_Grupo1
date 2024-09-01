// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx";
import MisImagenes from "./components/Imagenes/Imagenes.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
    return (
        <>
            <Banner/>
            <Navbar/>
            <div className="content">
                <MisImagenes misrc="/image03.png" mialt="hola"/>
                <MisImagenes misrc="/image03.png" mialt="hola"/>
                <MisImagenes misrc="/image03.png" mialt="hola"/>
            </div>
            <Footer/>
        </>
    )
}

export default App

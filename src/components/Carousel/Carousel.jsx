// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './carousel.css';
import { faChevronRight, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Array de imágenes con enlaces
const images = [
    { src: 'carousel_01.svg', href: '/Nike' },
    { src: 'carousel_02.svg', href: '/Converse' },
    { src: 'carousel_03.svg', href: '/NewBalance' },
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 25000); // Cambia cada 25 segundos
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="carousel">
            <button className="left-arrow" onClick={goToPrevious}><FontAwesomeIcon icon={faChevronLeft}/></button>
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <a key={index} href={image.href} target="_blank" rel="noopener noreferrer">
                        <img src={image.src} alt={`carousel ${index}`} className="carousel-image" />
                    </a>
                ))}
            </div>
            <button className="right-arrow" onClick={goToNext}><FontAwesomeIcon icon={faChevronRight}/></button>
            <div className="indicators">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;

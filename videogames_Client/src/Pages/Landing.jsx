//**📍 LANDING PAGE |** deberás crear una página de inicio o bienvenida con:

//-  Alguna imagen de fondo representativa al proyecto.
//-  Botón para ingresar a la **`home page`**.

import React from "react";
import './Landing.css';

const Landing = () => {
    return (
        <div className="landing-page">
            <h2>Welcome to Videogames App...</h2>
            <img className='image-landing' src='https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg' alt='landing page image' />
            <button className="btn"> Entrar </button>
        </div>
    )
};

export default Landing;
// **📍 DETAIL PAGE |** en esta vista se deberá mostrar toda la información específica de 
// un videojuego:

// -  ID.
// -  Nombre.
// -  Imagen.
// -  Plataformas.
// -  Descripción.
// -  Fecha de lanzamiento.
// -  Rating.
// -  Géneros.
import React from "react";
import { Link } from 'react-router-dom';
import './detail.css';

const Detail = ({name, releaseDate, rating}) => {
    return (
        <div>
            <h3>This is Detail Page</h3>
            <div className="detail-card">
                <h5>Videogame ID</h5>
                <h5>{name}</h5>
                <h5>Videogame Platforms</h5>
                <h5>Videogame Description</h5>
                <h5>{releaseDate}</h5>
                <h5>{rating}</h5>
                <h5>Videogame Genres</h5>
            </div>
            <Link to='/home'>
                <button>Back Home</button>
            </Link>
        </div>
    )
};

export default Detail;
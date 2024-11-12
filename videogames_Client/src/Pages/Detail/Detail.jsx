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
import React, { useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from "../../Redux/actions";
import './detail.css';

const Detail = () => {
    const videogameById = useSelector((state) => state.videogameDetail);
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getVideogameById(id));        
    }, []);
    
    const { id } = useParams();
    console.log('id en Detail: ', useParams());
        
    return (
        <div>
            <div className="detail-card">
                <h2>{videogameById.name}</h2>
                
                <h3>Released {videogameById.releaseDate}</h3>
                <h3>Rated {videogameById.rating} </h3>
                
                <h3>Platforms:</h3>
                <p>{/*videogameById.platforms.join(' | ')*/}</p> 
                <p>{videogameById.platforms}</p>
                
                <h3>Genres:</h3>
                <p>{/*videogameById.genres.join(' | ')*/}</p>
                <p>{videogameById.genres}</p>
                <h5>ID: {videogameById.id}</h5>
                <div className='description-div'>
                    <h4>{videogameById.description}</h4>
                </div>
            </div>
            <Link to='/home'>
                <button>Back Home</button>
            </Link>
        </div>
    )
};

export default Detail;
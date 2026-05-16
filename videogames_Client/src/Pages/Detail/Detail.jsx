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

       <div className="detail-container">
            
            <div className="detail-card">
                <div className="detail-header">

                    <h1>{videogameById.name}</h1>
                    <Link to='/home'>
                        <button className="back-button">Back Home</button>
                    </Link>
                </div>
            </div>
            <img 
                className='videogame-image' 
                /*width='210em' height='auto'*/ 
                src={videogameById.image} 
                alt={videogameById.name}
            />
            <div className="detail-info">
                 <p>
                    <span>Released: {videogameById.releaseDate}</span>
                </p>
                <p>
                    <span>Rating: {videogameById.rating} </span>
                </p>
                
                <p>
                    <span>Platforms: </span> 
                    {Array.isArray(videogameById.platforms) ? videogameById.platforms.join(' | ') : videogameById.platforms}
                     
                </p>
                
                <p>
                    <span>Genres: </span>
                    {/* esto de abajo es parche, hay que arreglarlo para que siempre llegue un array*/}
                    {Array.isArray(videogameById.genres) ? videogameById.genres.join(' | ') : videogameById.genres}
                </p>
                
                <p>
                    <span>ID: </span> {videogameById.id}
                </p>
            </div>
            <div className='description-container'>
                <h3>Description</h3>
                <p>
                    {videogameById.description}
                </p>
            </div>
       </div>
    )

}

export default Detail;
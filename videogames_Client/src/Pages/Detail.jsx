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
import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './detail.css';
import { useDispatch, useSelector } from "react-redux";
import { getVideogameById } from "../Redux/actions";

const Detail = () => {
    /* //SI QUIERO USAR REDUX (PERO NO ANDA)
    const videogameById = useSelector((state) => state.videogameDetail);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogameById());        
    }, []);
    */
    
    //viniendo directo desde cada card y tampoco anda :'(:'(:'(
    const { id } = useParams();
    console.log('id en Detail: ', useParams());
    const [detail, setDetail] = useState({});
    /*
    useEffect(()=>{
        try {
            axios.get(`http://localhost:3000/videogames/${id}`)
            .then(response => response.data)
            .then((data)=> {
                if(data.name) {
                    setDetail(data)
                } else {
                    console.log(`no hay videogame de id: ${id}`);
                }
            });
        } catch (error) {
            throw new Error(error.request.response);
        };
        return setDetail({});
    }, [id]);
    */ 

    return (
        <div>
            <div className="detail-card">
                <h3>{detail.name}</h3>
                <h5>Videogame ID: {detail.id}</h5>
                <h5>Platforms: {detail.platforms}</h5>
                <h5>Release Date: {detail.releaseDate}</h5>
                <h5>Rating: {detail.rating}</h5>
                <h5>Genres: {detail.genres}</h5>
                <div className='description-div'>
                    <h5>{detail.description}</h5>
                </div>
            </div>
            <Link to='/home'>
                <button>Back Home</button>
            </Link>
        </div>
    )
};

export default Detail;

//import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

const Card = (videogames) => {
    
    return (
        <div className="cardContainer" key={videogames.id} >
            <Link className="linkDetail" to={`/detail/${videogames.id}`}>
                <h3>{videogames.name}</h3>
            </Link>
            <img 
                className='card-image' 
                width='210em' height='auto' 
                src={videogames.image} 
                alt={videogames.name}
            /> 

            <h4>
                {videogames.genres?.map((genre) => {
                    return <p key={genre.id}>{genre}</p>
                })}
            </h4>
        </div>
    )
};

export default Card;
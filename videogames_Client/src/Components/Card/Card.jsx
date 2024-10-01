import React from "react";
import './Card.css';
import { Link } from "react-router-dom";

const Card = ({name, releaseDate, rating}) => {
    return (
        <div className="cardContainer">
            <Link to='/detail/:id'>
            <h3>{name}</h3>
            </Link>
            
            <h3>Release Date: {releaseDate}</h3>
            <h3>Rating: {rating}</h3>
        </div>
    )
};

export default Card;
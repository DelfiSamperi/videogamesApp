import React from "react";
import './Card.css';
import { NavLink } from "react-router-dom";

const Card = ({name, releaseDate, rating}) => {
    return (
        <div className="cardContainer">
            
            <h3>{name}</h3>
            <h3>Release Date: {releaseDate}</h3>
            <h3>Rating: {rating}</h3>
        </div>
    )
};

export default Card;
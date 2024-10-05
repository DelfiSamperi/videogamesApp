import React from "react";
import Card from "../Card/Card.jsx";
import './Cards.css';

const Cards = ({videogames}) => {
    return (
        <div className="cards-cont">
            
            {videogames.map((game) =>
                <Card 
                    name={game.name}
                    image={game.image}
                    releaseDate= {game.releaseDate} 
                    rating={game.rating} >
                </Card>
            )}
            
        </div>
    )
};

export default Cards;

/*
VideogamesDb = [ 
    { 
        "name": "Untitled Goose Game",
        "releaseDate": "2019-09-20",
        "rating": 4.04,
    },
    {
        "name": "The Legend of Zelda: Link's Awakening (2019)",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/games/1bb/1bb38f1354db6596ccd6bdcb4a7f6cbc.jpg",
        "rating": 4.34,
        "genres": [ "Adventure", "Action", "RPG" ]
    },
    {
        "name": "Rebound Dodgeball Evolved",
        "platforms": [ "PC", "Xbox One" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/473/473172f068d52d9b26b589c3038f1ef4.jpg",
        "rating": 0.0,
        "genres": [ "Indie", "Sports" ]
    },
    {
        "name": "2048 Battles",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/d91/d914d9fcb4e243eeb80fd742a5a1bee5.jpg",
        "rating": 0.0,
        "genres": [ "Indie", "Sports" ]
    },
    {
        "name": "Detective Dolittle",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/0c9/0c9c41ad6ae42e9c8ff1fa25d4a400de.jpg",
        "rating": 0.0,
        "genres": [ "Indie", "Sports" ]
    },
    {
        "name": "Island Maze",
        "platforms": [ "PC", "Nintendo Switch", "macOS" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/982/98288b3a0a999644232a3b3583f6d8dd.jpg",
        "rating": 0.0,
        "genres": [ "Casual", "Indie" ]
    },
    {
        "name": "Talk it Out: Handheld Game",
        "platforms": [ "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/01b/01bc4fbd54c9453c90d2be7be7bf48f3.jpg",
        "rating": 0.0,
        "genres": [ "Casual", "Indie" ]
    },
    {
        "name": "Spellworm",
        "platforms": [ "PC", "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/a63/a635f3c0a9bd878f762e640b602cbbb2.jpg",
        "rating": 0.0,
        "genres": [ "Casual", "Indie" ]
    }
];
*/
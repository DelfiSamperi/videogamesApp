//ESTE ARCHIVO NO SE USA EN LA APP, SOLO EN ETAPA DE PRODUCCION

//endpoint de la api me da por resultado un objeto -> yo necesito el array de objetos RESULTS
const apiVideogames = {
    "count": 12,
    "next": null,
    "previous": null,
    "results": [ //data.results ??
        {
            "name": "Children of Morta",
            "platforms": [
                {
                    "platform": {
                        //"id": 4,
                        "name": "PC",
                        //"slug": "pc"
                    }
                },
                {
                    "platform": {
                        //"id": 1,
                        "name": "Xbox One",
                        //"slug": "xbox-one"
                    }
                },
                {
                    "platform": {
                        //"id": 18,
                        "name": "PlayStation 4",
                        //"slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        //"id": 7,
                        "name": "Nintendo Switch",
                        //"slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        //"id": 5,
                        "name": "macOS",
                        //"slug": "macos"
                    }
                },
                {
                    "platform": {
                        //"id": 6,
                        "name": "Linux",
                        //"slug": "linux"
                    }
                }
            ],
            "released": "2019-09-03",
            "background_image": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
            "rating": 3.91,
            "genres": [
                {
                    "id": 51,
                    "name": "Indie",
                    "slug": "indie"
                },
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                },
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg"
                }
            ]
        },
        {
            "name": "Catherine: Full Body",
            "platforms": [
                {
                    "platform": {
                        "id": 18,
                        "name": "PlayStation 4",
                        "slug": "playstation4"
                    }
                },
                {
                    "platform": {
                        "id": 7,
                        "name": "Nintendo Switch",
                        "slug": "nintendo-switch"
                    }
                },
                {
                    "platform": {
                        "id": 19,
                        "name": "PS Vita",
                        "slug": "ps-vita"
                    }
                }
            ],
            "released": "2019-09-03",
            "background_image": "https://media.rawg.io/media/games/f55/f5532538a538a505204fd4f3f2b19c1c.jpg",
            "rating": 4.15,
            "id": 244694,
            "genres": [
                {
                    "id": 3,
                    "name": "Adventure",
                    "slug": "adventure"
                },
                {
                    "id": 4,
                    "name": "Action",
                    "slug": "action"
                },
                {
                    "id": 5,
                    "name": "RPG",
                    "slug": "role-playing-games-rpg"
                },
                {
                    "id": 7,
                    "name": "Puzzle",
                    "slug": "puzzle"
                }
            ]
        },
    ],
    "user_platforms": false
};

//VIDEOGAMES de prueba para agregar a DataBase

const DBvideogames = [
    {
        "name": "Untitled Goose Game",
        "platforms": ["PC", "Xbox One", "PlayStation 4", "Nintendo Switch", "macOS"],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/games/199/1996ab6448cadb2ce4bea31536466333.jpg",
        "rating": 4.04,
        "genres": ["Indie", "Family", "Action", "Puzzle"]
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
    },
    {
        "name": "Hidden",
        "platforms": [ "PC",  "PlayStation 4", "Nintendo Switch" ],
        "description": "created in DB by Delfina",
        "releaseDate": "2019-09-20",
        "image": "https://media.rawg.io/media/screenshots/ce8/ce83c6349af2205ef165f08ac046a600.jpg",
        "rating": 0.0,
        "genres": [ 
            "Adventure",
            "Action",
            "RPG",
            "Casual",
            "Strategy",
            "Simulation",
            "Sports",
            "Indie"
        ]
    },
    {
        "name": "Catherine: Full Body",
        "platforms": ["PlayStation 4", "Nintendo Switch", "PS Vita"],
        "releaseDate": "2019-09-03",
        "image": "https://media.rawg.io/media/games/f55/f5532538a538a505204fd4f3f2b19c1c.jpg",
        "rating": 4.15,
        "genres": [
            "Adventure",
            "Action",
            "RPG",
            "Puzzle"                
        ]
    }
];

//esto es para probar el front
export const oneGame = {
    "name": "Children of Morta",
    "platforms": [
        {
            "platform": {
                //"id": 4,
                "name": "PC",
                //"slug": "pc"
            }
        },
        {
            "platform": {
                //"id": 1,
                "name": "Xbox One",
                //"slug": "xbox-one"
            }
        },
        {
            "platform": {
                //"id": 18,
                "name": "PlayStation 4",
                //"slug": "playstation4"
            }
        },
        {
            "platform": {
                //"id": 7,
                "name": "Nintendo Switch",
                //"slug": "nintendo-switch"
            }
        },
        {
            "platform": {
                //"id": 5,
                "name": "macOS",
                //"slug": "macos"
            }
        },
        {
            "platform": {
                //"id": 6,
                "name": "Linux",
                //"slug": "linux"
            }
        }
    ],
    "released": "2019-09-03",
    "background_image": "https://media.rawg.io/media/games/434/43431e04f0cd5419a3d8e31a5c8c3d5d.jpg",
    "rating": 3.91,
    "genres": [
        {
            "id": 51,
            "name": "Indie",
            "slug": "indie"
        },
        {
            "id": 3,
            "name": "Adventure",
            "slug": "adventure"
        },
        {
            "id": 4,
            "name": "Action",
            "slug": "action"
        },
        {
            "id": 5,
            "name": "RPG",
            "slug": "role-playing-games-rpg"
        }
    ]
}

export default DBvideogames;
//const { Sequelize } = require('sequelize');
const { Videogames, Genres } = require('../db');
//const { Op } = require('sequelize');
const axios = require('axios');

const { API_KEY, API_URL} = process.env;
//const API_URL = 'https://api.rawg.io/api/games';

// GET VIDEOGAMES
const getVideogamesApi = async () => {
    const dataApi = (await axios.get(`${API_URL}?limit=100&key=${API_KEY}`)).data;

    const videogamesApi = dataApi.results.map((videogame) => ({
        name: videogame.name,
        id: videogame.id,
        description: videogame.description_raw,
        platforms: videogame.platforms.map((p) => (p.platform.name)),
        image: videogame.background_image,
        releaseDate: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((g) => (g.name)),
    }));

    console.log('brings the videogames from the API');
    if (!videogamesApi.length) console.log('unavailable videogames from api');
    return videogamesApi;
};

const getVideogamesDB = async () => {
    const videogamesDB = await Videogames.findAll({
        include: {
            model: Genres,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });
    if (!videogamesDB.length) console.log('no videogames available in database');
    //console.log('trae toda la lista de videojuegos de DB');
    return videogamesDB;
};

const getAllGames = async (name) => {
    const videogamesFromApi = await getVideogamesApi();
    const videogamesFromDb = await getVideogamesDB();
    const allVideogames = [
        ...videogamesFromApi,
        ...videogamesFromDb
    ];

    /* GET VIDEOGAMES BY NAME
    Obtiene primeros 15 videojuegos que se encuentren con la 
    palabra recibida por query.
    Busca independientemente de mayúsculas o minúsculas.
    Si no existe el videojuego, mostrar un mensaje adecuado.
    Buscar en la API y en la base de datos.
    */
    // query --> /?name=pepito&apellido=pepitez

    if (name) {
        const videogameByName = allVideogames.filter(v => (
            v.name.toLowerCase().includes(name.toLowerCase())
        )).slice(0, 15);

        if (!videogameByName.length) throw new Error(`no videogame match for ${name}`);
        return videogameByName;
    };
    console.log(`You are bringing ${allVideogames.length} videogames`)
    console.log(`Of which ${videogamesFromApi.length} come from the API and ${videogamesFromDb.length} from DB`)
    return allVideogames;
};

// get by id
const getVideogameById = async (id) => {

    if (isNaN(id)) {
        const videogameDB = await Videogames.findOne({ where: { id } });
        console.log(`trajo el videogame ${videogameDB.name} desde la DB`)
        return videogameDB;
    };

    const dataApi = (await axios.get(
        `${API_URL}/${id}?key=${API_KEY}`
    )).data;

    const videogameAPI = {
        name: dataApi.name,
        id: dataApi.id,
        description: dataApi.description_raw,
        platforms: dataApi.platforms.map((p) => (p.platform.name)),
        image: dataApi.background_image,
        releaseDate: dataApi.released,
        rating: dataApi.rating,
        genres: dataApi.genres.map((g) => (g.name)),
    };
    console.log(`trajo el videogame ${videogameAPI.name} desde la api`)
    return videogameAPI;
};

//POST VIDEOGAMES
const createVideogame = async (
    name,
    description,
    platforms,
    image,
    releaseDate,
    rating,
    genres) => {

    const findVideogame = await Videogames.findAll({ where: { name: name } });
    if (findVideogame.length) {
        throw new Error(`The videogame ${name} already exists`);
    };

    const newVideogame = await Videogames.create({
        name,
        description,
        platforms,
        image,
        releaseDate,
        rating,
    });

    const genresInDB = await Genres.findAll({
        where: {
            name: genres
        }
    });

    await newVideogame.addGenres(genresInDB);
    
    console.log(newVideogame.dataValues);
    return (`New videogame ${newVideogame.name} created with genres ${genres}`);

};

module.exports = {
    createVideogame,
    getAllGames,
    getVideogameById,
};
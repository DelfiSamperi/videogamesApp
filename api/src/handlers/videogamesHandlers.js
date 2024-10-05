const { 
    createVideogame,
    getAllGames,
    getVideogameById,

} = require('../controllers/videogamesControllers');

const getAllVideogames = async (req,res) => {
    const {name} = req.query;
    try {
        if(name) {
            const videogameName = await getAllGames(name);
            return res.status(200).json(videogameName);
        }
        const videogameName = await getAllGames();
        return res.status(200).send(videogameName)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

/*
GET BY ID -> detalle de un videojuego específico. 
devuelve un objeto con la información pedida por id
- El videojuego es recibido por parámetro (ID).
- Incluye datos del género del videojuego al que está asociado.
- Busca en la API y en base de datos.
*/
const getVideogamesId = async (req,res) => {
    const {id} = req.params;
    try {
        const videogameId = await getVideogameById(id);
        res.status(200).json(videogameId)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
};

/*
POST VIDEOGAME
La información debe ser recibida por body.
 Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus 
 géneros indicados (al menos uno).
*/
const postVideogame = async (req,res) => {
    console.log('Este handler agrega un nuevo videogame a la DB');
    const {name, description, platforms, image, releaseDate, rating, genres} = req.body;
    try {
        const newVideogame = await createVideogame(name, description, platforms, image, releaseDate, rating, genres);
        res.status(201).json(newVideogame);

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = {
    getAllVideogames,
    getVideogamesId,
    postVideogame
};

    
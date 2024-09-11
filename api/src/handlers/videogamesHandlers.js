const getAllVideogames = (req,res) => {
    const {name} = req.query;
    if(name) {
        return res.status(200).send(`Recibimos el videogame: ${name}`)
    } else {
        return res.status(400).send(`No se encontro videojuego de nombre ${name} pero te mando la lista completa!`);
    }
}

/* GET VIDEOGAMES BY NAME
Obtiene primeros 15 videojuegos que se encuentren con la 
palabra recibida por query.
Busca independientemente de mayúsculas o minúsculas.
 Si no existe el videojuego, mostrar un mensaje adecuado.
Buscar en la API y en la base de datos.
*/
// query --> /?name=pepito&apellido=pepitez
const getVideogamesName = (req,res) => {
    
};

/*
GET BY ID -> detalle de un videojuego específico. 
devuelve un objeto con la información pedida por id
- El videojuego es recibido por parámetro (ID).
- Incluye datos del género del videojuego al que está asociado.
- Busca en la API y en base de datos.
*/
const getVideogamesId = (req,res) => {
    const {id} = req.params;
    res.status(200).send(`Recibimos el id: ${id}`)
};

/*
POST VIDEOGAME
La información debe ser recibida por body.
 Debe crear un videojuego en la base de datos, y este debe estar relacionado con sus 
 géneros indicados (al menos uno).
*/
const postVideogame = (req,res) => {
    const {name, genre, date} = req.body;
    res.status(200).send(`Creamos el videogame de nombre ${name}, genero ${genre} , fecha ${date}`)
}

module.exports = {
    getAllVideogames,
    getVideogamesName,
    getVideogamesId,
    postVideogame
};

    
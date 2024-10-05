const express= require('express');
const morgan = require('morgan');
//const cors = require('cors');
const mainRouter = require('./routes/mainRouter');

const app = express();
// server.name = 'API'; ??

//muestra las peticiones por la consola
app.use(morgan('dev'));

//app.use(cors());

//para que express detecte una estructura json (como cuando hacemos post)
app.use(express.json());

//permite interaccion con fuentes externas con cors
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//rutas que debe usar app
app.use(mainRouter);


module.exports = app;
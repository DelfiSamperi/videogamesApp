const express= require('express');
const morgan = require('morgan');

const app = express();
// server.name = 'API'; ??

app.use(morgan('dev'));

app.get('/', (req,res)=> {
    res.status(200).send('Todo funcionando!');
});


module.exports = app;
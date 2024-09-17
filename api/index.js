const server = require('./src/app');
const PORT = process.env.PORT || 3000;
const { conn } = require('./src/db');
const { getGenrestoDB } = require('./src/controllers/genresControllers');

server.listen(PORT, () => {
    //conn.sync({ force: true }) //reinicia la tabla desde cero cada ves que se reinia el server (se pierden los datos)
    conn.sync({ alter: true }) //permite hacer cambios en DB sin eliminarla
    getGenrestoDB();
    console.log(`Server listening in port ${PORT}...`)
});

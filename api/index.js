const server = require('./src/app');
const PORT = process.env.PORT || 3000;
const { conn } = require('./src/db');

server.listen(PORT, () => {
    conn.sync({ alter: true }) //permite hacer cambios en DB cuando reiniciamos el server
    console.log(`Server listening in port ${PORT}...`)
});

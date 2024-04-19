const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

const server = app.listen(port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});

const cerrarServidor = () => {
    server.close();
};
module.exports = {app, cerrarServidor};

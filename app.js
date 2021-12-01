const express = require('express');
const path = require('path');

let app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/marketplace', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/marketplace.html'))
})

app.get('/marketplace/carrito', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/carrito.html'))
})

app.get('/marketplace/detalle', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/detalle.html'))
})

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});
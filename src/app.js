const mainRoutes = require('./routes/mainRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');

const express = require('express');
const path = require('path');

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const publicPath = path.resolve(__dirname, '..', './public');
const viewsPath = path.resolve(__dirname, './views')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicPath)); //Hacer publica la carpeta Public
app.use(express.static(viewsPath)); //Hacer publica la carpeta views

app.use('/', mainRoutes);
app.use('/marketplace', marketplaceRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});
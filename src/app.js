const mainRoutes = require('./routes/mainRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');

const express = require('express');
const path = require('path');

let app = express();

app.set('view engine', 'ejs');

const publicPath = path.resolve(__dirname, '..', './public');
const viewsPath = path.resolve(__dirname, './views')

app.use(express.static(publicPath));
app.use(express.static(viewsPath));

app.use('/', mainRoutes);
app.use('/marketplace', marketplaceRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});
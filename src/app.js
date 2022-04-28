// Importar rutas
const mainRoutes = require('./routes/mainRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');
const usersRoutes = require('./routes/usersRoutes');
const apiRoutes = require('./api/routes/apiRoutes');
// Importar archivo que usa las cookies
const userCookie = require('./middlewares/userCookie');
// Importar librerias
const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const cors = require('cors');

// Ejecutar express en la variable app
let app = express();
// Levantar servidor
app.listen(process.env.PORT || 8889, () => {
	console.log('Servidor corriendo en el puerto 8889');
});
// Configurar ejs como motor de vistas y configurar la ubicación de la carpeta views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Activar cors
app.use(cors());

// Hacer pública la carpeta public
const publicPath = path.resolve(__dirname, '..', './public');
app.use(express.static(publicPath)); //Hacer publica la carpeta Public

// Configuración para poder acceder a los datos que llegan por body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Ejecutar methodOverride para poder hacer rutas por PUT y DELETE
app.use(methodOverride('_method'));

// Configurar session
app.use(session({
	secret: "secreto starknights",
	resave: true,
	saveUninitialized: false,
}));

// Activar las cookies y usar el archivo que las maneja (userCookie.js)
app.use(cookieParser());
app.use(userCookie);
// Definir las rutas principales
app.use('/', mainRoutes);
app.use('/marketplace', marketplaceRoutes);
app.use('/users', usersRoutes);
app.use('/api', apiRoutes);
app.use((req, res, next) => {
	res.render('404');
})
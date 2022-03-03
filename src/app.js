const mainRoutes = require('./routes/mainRoutes');
const marketplaceRoutes = require('./routes/marketplaceRoutes');
const usersRoutes = require('./routes/usersRoutes');
const userCookie = require('./middlewares/userCookie');

const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const methodOverride = require('method-override');

let app = express();

app.listen(process.env.PORT || 3000, () => {
	console.log('Servidor corriendo en el puerto 3000');
});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const publicPath = path.resolve(__dirname, '..', './public');
const viewsPath = path.resolve(__dirname, './views')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(publicPath)); //Hacer publica la carpeta Public
app.use(express.static(viewsPath)); //Hacer publica la carpeta views

app.use(methodOverride('_method'));

app.use(session({
	secret: "secreto starknights",
	resave: true,
	saveUninitialized: false,
})); //Configurar session

app.use(cookieParser());

app.use(userCookie);

//app.use(userCookie);

app.use('/', (req, res, next) => {console.log('main'); next()} , mainRoutes);
app.use('/marketplace', marketplaceRoutes);
app.use('/users', usersRoutes);
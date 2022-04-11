# Starknights
Digital House

## Descripción
Starknights es un juego NFT ficticio enfocado en el desarrollo de un personaje que viaja por el universo y puede combatir con otros jugadores en linea, formar alianzas, facciones y organizaciones, y progresar en armamentos y estadísticas. Este proyecto es la página oficial de dicho juego ficticio (y decimos ficticio porque el juego en sí es sólo un concepto, no existe realmente), donde los usuarios pueden comprar y vender items que usarán dentro del juego, como naves, armamento, mascotas, entre otros. El comercio se realiza principalmente entre usuarios, usando ethereum como moneda de cambio. El proyecto fue desarrollado usando el motor de plantillas EJS y React (explicado más adelante) para el front end y Node js con Express para el backend, además de una base de datos en SQL, conectada a la aplicación usando la ORM de Sequelize.

## Público Objetivo
Nuestro proyecto está orientado a jóvenes que les gusten los videojuegos y utilicen las criptomonedas.

## Rangos de usuarios
Cada usuario tiene un rango distintivo según cuantos items tiene en su inventario. Este rango se muestra en el perfil principal y, a excepcion del rango Founder, no otorga ninguna habilidad o permiso especial.

1) Founder: Para los desarrolladores del proyecto, tienen permiso de crear items en el marketplace.
2) Explorer: Menos de 10 items
3) Conqueror: Entre 10 y 30 items
4) Lord: 30 items en adelante

## Items
Cada objeto tiene un nivel distinto de rareza. Mientras más alto sea este nivel, mejores son sus estadísticas en general. Los niveles son, en orden de más bajo a más alto:
1)común
2)cósmico
3)astral
4)infinito

Existen 5 categorías distintas, cada una con distintas estadísticas:

### Naves
Medio de transporte dentro del juego. Existen distintas clases de naves, especializándose más en el transporte de materiales (cargo) o en el combate.

Estadisticas:
- Color
- Velocidad
- Armadura
- Peso

### Armas
Estadísticas:
- Peso
- Daño

### Mascotas
Tipos

### Armaduras
Estadísticas:
- Peso
- Durabilidad

### Pases
Cada pase está vinculado a un planeta, y su rareza es la misma que la de dicho planeta. Éstos sirven para limitar el ingreso de jugadores a un planeta, solo a quienes posean su correspondiente pase, y también determinan la población de un planeta. Cada jugador que posea un pase es residente/habitante del planeta.

## Secciones
El sitio web cuenta con las siguientes secciones navegables e interactivas:

### Inicio
Breve presentación de las funcionalidades del juego

### Marketplace
Aquí los usuarios pueden buscar, comprar y vender items entre sí. Cuenta con las funcionalidades de añadir items al carrito, ver detalles de cada item y filtrar por tipos, rarezas y estadísticas.

### Perfil
Centro donde el usuario puede administrar su perfil e inventario, consiste de 4 secciones:

- Cuenta
- Inventario
- Actividad (Historial de transacciones del usuario)
- Configuración

### Historia
Página que resume la historia ficticia del mundo donde toma lugar el juego

### Planetas
Página donde se pueden explorar todos los planetas incluidos en la base de datos del juego, con sus distintas características. Cada planeta está vinculado a un sistema solar y tiene definidos los siguientes campos:

- Nombre
- Población (suma de todos los usuarios que tengan en su inventario un pase)
- ESI (Earth Similarity Index) - Índice que determina mediante un porcentaje qué tan similar a la Tierra es un planeta.
- Tamaño - Se mide en comparación al tamaño de la Tierra, es decir, 1 es el mismo tamaño que el de la Tierra, 1.5 es un 50% más grande que la Tierra.
- Condiciones de vida (en porcentaje)

## Contribuyentes
Ariel Cocimano - 37 años<br/>
Santiago Badino - 22 años<br/>
Felipe Cornejo - 19 años<br/>
Christian Adrian Aimone - 21 años


## Listado de páginas referentes:
1) [Axie Infinity](https://www.axieinfinity.com) - Uno de los juegos nfts mas grandes del mercado. Nos sirve de gran referencia para tener los parametros con los que tiene que cumplir cualquier juego que le vaya a competir hoy en día en el mercado. Cuenta con una página principal que describe brevemente de qué trata el juego, y con un marketplace donde se comercian los NFTs de dicho juego.
2) [Black Eye Galaxy](https://blackeyegalaxy.com) - Un juego NFT no tan popular, sin embargo tiene una temática algo parecida a la que queremos llevar a cabo. Si bien nuestro juego está más orientado al combate y este a la exploración, usa también la temática espacial, y se pueden comerciar distintos tipos de naves.
3) [Blizzard](https://www.blizzard.com) - Una página de juegos tradicionales donde podemos encontrar las páginas oficiales de distintos tipos de juegos, cada uno con elementos que nos sirven para crear la página principal de nuestro propio juego.
4) [Marketplace de Blizzard](https://us.shop.battle.net/es-es) - Ésta página cuenta con un marketplace donde se comercian objetos que sólo tienen uso dentro de los distintos juegos de la plataforma. Algo parecido a nuestro proyecto.
5) [Opensea](https://www.opensea.io) - La página más grande de compra y venta de NFTs de cualquier tipo.


## Links Importantes
1) [Starknights - Sitio Web](https://starknights.herokuapp.com)
2) [Tablero de trabajo grupal (Trello)](https://trello.com/b/0aEn9SYd/proyecto-grupal)
3) [Repositorio de la API (con su propio README)](https://github.com/felipecornejo1/starknights-api)
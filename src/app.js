// Inicializa express las dos const de abajo
const express = require('express');
const app = express();

// con bodyParser nos va ayudar para entender las peticiones post
const morgan = require('morgan');
const bodyParser = require('body-parser');


/* ---------------SETTINGS, se define el puerto que va a usar, el segundo parametro es por si la app ya viene con un port definido y va enviar ese port
con process.env.PORT, en caso contrario si no tiene port que escuche en el port 3000 */
app.set('port', process.env.PORT || 3000);

/*  ---------------MIDDLEWARES,     son funciones que se ejecutan cada vez que hay peticiones
 morgan('dev') se esta indicando que se use morgan en su configuracion de desarrollo, morgan me muestra mensajes de las solicitudes por la terminal
 con bodyParser.json(), entiende las peticiones de la api, las peticiones de los clientes son enviadas como json y con bodyParse.json entiende esas peticiones */
app.use(morgan('dev'));
app.use(bodyParser.json());


/*  ---------------ROUTES, se tienen las rutas definidas, se requiere lo que exporta userRoutes que es una funcion que recibe app como parametro
y aqui se esta enviando app que es el objeto de express */
require('./routes/userRoutes')(app)


app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000');
});



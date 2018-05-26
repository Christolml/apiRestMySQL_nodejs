// Inicializa express las dos const de abajo
const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');


/* settings, se define el puerto que va a usar, el segundo parametro es por si la app ya viene con un port definido y va enviar ese port
con process.env.PORT, en caso contrario si no tiene port que escuche en el port 3000 */
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


// routes


app.listen(app.get('port'), ()=> {
    console.log('Server on port 3000');
});



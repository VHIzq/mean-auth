const express = require('express');

//*creamos el server de express

const app = express();

//*rutas

app.use( '/api/auth', require('./routes/auth'));

app.listen(4000, () => {
  console.log(`server corriendo en puerto ${ 4000 } `);
})


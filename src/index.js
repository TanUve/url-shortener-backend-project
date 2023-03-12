const app= require('./server');    
require('dotenv').config()
require('./db')

//Obtenemos el puerto del archivo server
app.listen( app.get('PORT'), ()=>{
    console.log('listening on port ' + app.get('PORT')) ;
} )

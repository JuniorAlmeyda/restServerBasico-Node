
const express = require('express'); //EXPRESS
const cors = require('cors'); //CORS

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //MIDDELWARES son funciones, es para el contenido estático, usan el 'use'
        this.middlewares();
        
        //RUTAS DE MI APLICACIÓN
        this.routes();
    }   

    middlewares(){

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());

        //directorio publico
        this.app.use( express.static('public') );

    }

    routes(){

        this.app.use( this.usuariosPath , require('../routes/usuarios')); //( path, lo que requieres)

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('servidor corriendo en puerto ', this.port)
        });
    }

}

module.exports = Server;







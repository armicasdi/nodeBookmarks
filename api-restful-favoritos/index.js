'use strict'

var mongoose = require('mongoose');
var app = require('./app');

//Escucha del Servidor
var port = process.env.PORT || 3679;

mongoose.connect('mongodb://localhost:27017/cursoFavoritos', { useNewUrlParser: true }, (err, res)=>{
    if(err){
        throw err;
    }else{
        console.log("Conexion Correcta");
        app.listen(port, function(){
            console.log(`API REST FAVORITOS funcionando en https://localhost:${port}`);
        });
    }
})




'use strict'

var Favorito = require('../models/favorito');


function prueba (req, res){


    if (req.params.nombre) {
        var nombre = req.params.nombre;
    } else {
        var nombre = "Sin Nombre";
    }
    
    
    res.status(200).send({
        data: [1,2,3,4] ,
        message:'Hola Mundo con Node Js y Express ' + nombre
    });
};


///Favoritos


function getFavorito(req,res){
    var favoritoId= req.params.id;

    Favorito.findById(favoritoId, (err, favorito) => {
        if (err){
            res.status(500).send({Message: "Error al encontrar el marcador"});
        }else{
            if(!favorito){
                res.status(400).send({message: "No hay marcadores"})
            }else{
                res.status(200).send({favorito})
            }
        }

        

        
    })

    
}

function getFavoritos(req,res){
    Favorito.find({}).sort("-title").exec((err, favoritos)=> {
        if(err){
            res.status(500).send({Message: "Error al encontrar el marcador"});
        }else{
            if(!favoritos){
                res.status(400).send({message: "No hay marcadores"})
            }else{
                res.status(200).send({favoritos})
            }
        }
        
        

        
    })
    
}

function saveFavorito(req,res){
                
    var favorito = new Favorito();
    var params= req.body;
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url; 

    
     favorito.save((err, favoritoStored) => {
        if(err){
            res.status(500).send({Message: "Error al guardar el marcador"});
        }else {
            res.status(200).send({favorito: favoritoStored});
        }
    });  
    
}

function updateFavorito(req,res){
    var favoritoId= req.params.id;
    var update = req.body;

    

    Favorito.findByIdAndUpdate(favoritoId, update, (err, favoritoUpdated)=>{
        if(err){
            res.status(500).send({Message: "Error al actualizar el marcador"});
        }else{
            res.status(200).send({favoritoUpdated})
        }
        
    })  

    

    
}

function deleteFavorito(req,res){
    var favoritoId= req.params.id;

    Favorito.findById(favoritoId, function(err, favorito){
        if (err){
            res.status(500).send({Message: "Error al encontrar el marcador"});
        }else{
            if(!favorito){
                res.status(400).send({message: "No hay marcadores"})
            }else{
                favorito.remove(err =>{
                    if(err){
                        res.status(500).send({Message: "Error al borrar el marcador"});
                    }else{
                        res.send(200).send({message:"El Marcador se ha borrado"})
                    }
                });
            }
        }
        
    })
}

module.exports = {
    prueba,
    getFavorito,
    saveFavorito,
    updateFavorito,
    deleteFavorito,
    getFavoritos
}
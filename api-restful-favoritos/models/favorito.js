'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema; 


var favoritoSchema = new Schema({
    title: String,
    description: String,
    url: String
}); 


module.exports = mongoose.model('Favorito', favoritoSchema);
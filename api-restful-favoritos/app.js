

var express = require('express');
var api = require('./routes/favorito');
var bodyParser = require("body-parser");

var app = express();





app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Header', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();
})

app.use('/api', api);



module.exports = app;
<<<<<<< HEAD
const express = require("express");
const app = express();

var mysql = require("mysql");
const Connection = require("mysql/lib/Connection");

var conexion = mysql.createConnection({
    host:"localhost",
    database:"notas_movil",
    user:"root",
    password:"291201"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("base de datos conectada")
    }
});

=======
const express = require("express");
const app = express();

var mysql = require("mysql");
const Connection = require("mysql/lib/Connection");

var conexion = mysql.createConnection({
    host:"localhost",
    database:"notas_movil",
    user:"root",
    password:"291201"
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("base de datos conectada")
    }
});

>>>>>>> 3ca02ed078cb355ec459bf25155afe512a9b88f8
module.exports = conexion;
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

module.exports = conexion;
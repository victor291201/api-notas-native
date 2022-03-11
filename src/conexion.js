const express = require("express");
const app = express();
const { Client } = require('pg')

const conexion = new Client({
    user: 'ydvrjhacybqajj',
    host: 'ec2-3-216-221-31.compute-1.amazonaws.com',
    database: 'd3nopavho0g1dk',
    password: 'b1278bc55d1ec74a9687d7c381b62c5efb37ecec80b77790227af10f8b9db044',
    port: 5432,
  })

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("base de datos conectada")
    }
})

module.exports = conexion;
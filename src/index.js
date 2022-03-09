const express = require("express");
const favicon = require('express-favicon');
const { json } = require("express/lib/response");
require("dotenv").config();
const app = express();
const mysql = require("mysql");
var bodyParser = require('body-parser')
var cors =require("cors");

const index = require("./routes/")
console.log("server Works")
//configuraciones
app.set("port",process.env.PORT||3000)
app.use(bodyParser.json());

app.use(cors())
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use('/public', express.static(__dirname + '/public/img'))

//middlewares

//routes
app.use(index)

//archivos estaticos

//escuchando servidor
app.listen(app.get("port"),()=>{
    console.log("server listen port ",app.get("port"))
})
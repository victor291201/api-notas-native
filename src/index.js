const express = require("express");
const { json } = require("express/lib/response");
const app = express();
const mysql = require("mysql");
var bodyParser = require('body-parser')
var cors =require("cors");

const index = require("./routes/")
console.log("server Works")
//configuraciones
app.set("port",3000)
app.use(bodyParser.json());
app.use(cors())

//middlewares

//routes
app.use(index)

//archivos estaticos

//escuchando servidor
app.listen(app.get("port"),()=>{
    console.log("server listen port ",app.get("port"))
})
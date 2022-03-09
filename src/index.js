<<<<<<< HEAD
const express = require("express");
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

//middlewares

//routes
app.use(index)

//archivos estaticos

//escuchando servidor
app.listen(app.get("port"),()=>{
    console.log("server listen port ",app.get("port"))
=======
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
>>>>>>> 3ca02ed078cb355ec459bf25155afe512a9b88f8
})
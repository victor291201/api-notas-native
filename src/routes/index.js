const express = require("express");
const router = express.Router();
const crud = require("../controladores/crud")


router.post("/iniciarSesion",crud.getUser);
router.post("/registro",crud.getRegistro);
router.post("/registro1",crud.register1);
router.post("/nota/:id",crud.postNota) 
router.put("/nota/:id",crud.putNota) 
router.get("/notas/:id",crud.getNotas);
router.delete("/nota/:id",crud.deleteNota);

module.exports = router
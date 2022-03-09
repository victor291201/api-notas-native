const express = require("express");
const conexion = require("../conexion.js")  
const nodemailer = require("nodemailer")

exports.getRegistro=(req,res)=>{
    console.log(req.body)
    const correo =req.body.correo;
    const contraseña =req.body.contraseña;
    conexion.query("insert into usuario (correo,contraseña) values('"+correo+"','"+contraseña+"')",function(error,results,fields){
        if(error){
            throw error
            }
        else{
            console.log("registrado correctamente")
            res.send("registrado correctamente")
        }});
    }
exports.register1=(req,res)=>{
    console.log(req.body)
    const codigo =req.body.codigo;
    const correo =req.body.correo;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // upgrade later with STARTTLS
        auth: {
          user: "appnotasrn@gmail.com",
          pass: "tceaqivcoumuvmqs",
        },
      });
    var mailOptions={
        from:"victor291201hugo@gmail.com",
        to:correo,
        subject:"enviado desde app notas",
        text:"tu codigo de verificacion es: "+codigo.toString()
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log("email enviado")
        }
    })
    res.send("enviado")
}
exports.getUser=(req,res)=>{
    console.log(req.body)
    const correo =req.body.correo;
    const contraseña =req.body.contraseña;
    conexion.query("select * from usuario where correo = '"+correo+"' and contraseña = '"+contraseña+"'",function(error,results,fields){
        if(error){
            throw error
        }
        else{
            if(results.length == 0){
                console.log("usuario no registrado");
            }
            else{
                console.log("sesion iniciada correctamente "+correo)
                res.json(results[0])
                console.log(results[0])
            }
        }
    })
}
exports.getNotas=(req,res)=>{
    const id =req.params.id;
    conexion.query("select * from nota where idUsuario = '"+id+"'",function(error,results,fields){
        if(error){
            throw error
        }
        else{
            if(results.length == 0){
                console.log("no existen notas de ese usuario");
                res.json(results)
            }
            else{
                console.log("notas del usuario "+id)
                res.json(results)
                console.log(results)
            }
        }
    })
}

exports.getNota=(req,res)=>{
    const id =req.params.id;
    conexion.query("select * from nota where id = '"+id+"'",function(error,results,fields){
        if(error){
            throw error
        }
        else{
            if(results.length == 0){
                console.log("no existen nota con ese id");
                res.send("no existen nota con ese id");
            }
            else{
                console.log("nota asociada al id "+id)
                res.json(results[0])
                console.log(results)
            }
        }
    })
}

exports.postNota=(req,res)=>{
    console.log(req.body)
    const idUsuario =req.params.id;
    const titulo =req.body.titulo;
    const prioridad =req.body.prioridad;
    const descripcion =req.body.decripcion;
    const encargado =req.body.encargado;
    const fEntrega =req.body.fEntrega;
    conexion.query("insert into nota (idUsuario,titulo,prioridad,decripcion,encargado,fEntrega,fCreacion) values("+idUsuario+",'"+titulo+"','"+prioridad+"','"+descripcion+"','"+encargado+"','"+fEntrega+"','22-01-01')",function(error,results,fields){
        if(error){
            throw error
            }
        else{
            console.log("registrado correctamente")
            res.send("registrado correctamente")
        }});
}

exports.putNota = (req,res)=>{
    console.log(req.body)
    const id = req.params.id;
    const titulo =req.body.titulo;
    const prioridad =req.body.prioridad;
    const descripcion =req.body.decripcion;
    const encargado =req.body.encargado;
    const fEntrega =req.body.fEntrega;
    conexion.query("update nota set titulo='"+titulo+"' ,prioridad='"+prioridad+"',decripcion='"+descripcion+"' ,encargado='"+encargado+"',fEntrega='"+fEntrega+"'  where id = "+id,function(error,results,fields){
        if(error){
            throw error
            }
        else{
            console.log("actualizado correctamente")
            res.send("actualizado correctamente")
        }});
}

exports.deleteNota=(req,res)=>{
    const id =req.params.id;
    conexion.query("delete from nota where id="+id,function(error,results,fields){
        if(error){
            throw error
            }
        else{
            console.log("eliminada correctamente")
            res.send("eliminada correctamente")
        }});
}
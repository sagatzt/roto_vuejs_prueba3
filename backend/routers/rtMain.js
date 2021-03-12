const express = require('express')
const rtMain = express.Router()
const daoUsers = require('../dao/daoUsers')

rtMain.get('/welcome',(req,res)=>{
    res.json({respuesta: 'ok'})
})

rtMain.post('/guardar',(req,res)=>{
    console.log(req.body)
    daoUsers.guardar(req.body)
    res.json({respuesta: 'ok'})
})

rtMain.get('/listar',(req,res)=>{
    daoUsers.listar()
        .then(usuarios=>{
            res.json(usuarios)
        })
})

rtMain.get('/listar-libros',(req,res)=>{
    daoUsers.listarLibros()
        .then(libros=>res.json(libros))
})

rtMain.post('/eliminar',(req,res)=>{
    daoUsers.eliminar(req.body.id)
    res.json({respuesta: 'ok'})
})

rtMain.post('/login',(req,res)=>{
    console.log(req.body.email,req.body.password)
    daoUsers.login(req.body.email,req.body.password)
        .then(data=>res.json(data))
})

module.exports=rtMain
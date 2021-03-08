const mongoose = require('mongoose')
const {Schema} = mongoose

const schemaUsuario = new Schema({
    nombre: {type:String},
    apellidos: {type:String},
    email: {type:String},
    password: {type:String,required:true},
})

class User{



}

schemaUsuario.loadClass(User)
module.exports=mongoose.model('user',schemaUsuario)
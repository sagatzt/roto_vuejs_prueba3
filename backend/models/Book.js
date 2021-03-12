const mongoose = require('mongoose')
const {Schema} = mongoose

const schemaLibro = new Schema({
    titulo: {type:String},
    texto:{type:String},
    usuario: {type:Schema.ObjectId,ref:"user"},
})

class Book{



}

schemaLibro.loadClass(Book)
module.exports=mongoose.model('book',schemaLibro)
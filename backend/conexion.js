const mongoose = require('mongoose')

mongoose.connect('mongodb://prueba:1234@localhost:27017/pruebadb', {
//mongoose.connect('mongodb://localhost:27017/basedatos')
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

module.exports=mongoose.connection
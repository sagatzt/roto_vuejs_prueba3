const User = require('../models/User')

const daoUsers={}

//función para guardar un usuario
daoUsers.guardar = function guardar(body){
    let usuario = new User(form)
    usuario.save()
}

//función para listar usurios
daoUsers.listar = function listar(){
    return new Promise((resolved,reject)=>{
        User.find()
        .then(usuarios=>resolved(usuarios))
        .catch(err=>reject(err))
    })    
}

//función para eliminar usuario
daoUsers.eliminar = function eliminar(id){
    User.findOneAndRemove({_id:id},(data)=>{
        console.log("registro eliminado")
    })
}

//función para loguear usuarios
daoUsers.login=function login(email,password){
    return new Promise((resolved,reject)=>{
        User.findOne({email:email})
        .then(data=>{
            if(data){
                if(data.password==password) 
                    resolved(data) //todo correcto ;)
                else
                    resolved(null) //el password no coincide
            } else{
                resolved(null) //no encuentro ese usuario
            }
        })        
    })
}


module.exports=daoUsers
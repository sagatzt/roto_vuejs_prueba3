<template>
  <div class="prueba">
      <div class="formulario">
        <h1>API Backend</h1>
            <div>Nombre: <input v-model="nombre"></div>
            <div>Apellidos: <input v-model="apellidos"></div>
            <div>Email: <input v-model="email"></div>
            <div>Password: <input v-model="password"></div>
            <button @click="enviar" class="btn btn-primary">Enviar</button>
      </div>
    <hr>
    <h5>** Listado de usuarios **</h5>    
    <!-- esto es una tabla con el listado de usuarios-->    
    <div style="text-align:left;">
        <div v-for="(usuario,ind) in usuarios" :key="ind">
            <a @click="eliminar(usuario._id)" class="eliminar" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-dash-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/>
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>                
            </a> | 
            {{usuario.nombre}} 
            {{usuario.apellidos}} | 
            {{usuario.email}} |
            {{usuario.password}}
        </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, computed, onMounted } from 'vue'
        
export default {
    name:'ApiBackend',
    props:{

    },
    setup(){
        let nombre=ref("")
        let apellidos=ref("")
        let email=ref("")
        let password=ref("")
        let usuarios=reactive([])

        onMounted(()=> {
            listar()
        })

        function eliminar(idSeleccionado){
            fetch('http://localhost:8081/api/eliminar',{
                method:'POST',
                body: JSON.stringify({
                    id: idSeleccionado
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

        function listar(){
            fetch('http://localhost:8081/api/listar')
                .then(resp=>resp.json())
                .then(datos=>{
                    usuarios.splice(0)
                    datos.forEach(usuario => {
                        usuarios.push(usuario)
                    })
                })            
        }

        function enviar(){
            console.log(nombre.value,apellidos.value)
            fetch('http://localhost:8081/api/guardar',{
                method: 'POST',
                body: JSON.stringify({
                    nombre: nombre.value,
                    apellidos: apellidos.value,
                    email: email.value,
                    password: password.value
                }),
                headers: {'Content-Type':'application/json'}
            }).then(resp=>resp.json())
                .then(datos=>listar())
        }

        return {
            nombre,apellidos,email,password,
            enviar,
            usuarios,
            eliminar
        }
    }
}
</script>

<style lang="scss" scoped>
    a.eliminar{
        color:red;
        svg{
            width:30px;
            height:30px;
        }
    }
    input,button{
        margin:5px;
    }
    .formulario{
        max-width:500px;
        display:inline-grid;
        text-align: right;
    }
</style>
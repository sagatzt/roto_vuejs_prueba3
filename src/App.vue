<template>
  <div class="navbar d-flex justify-content-between">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <div class="nav-brand">
      <LoginBox />
    </div>
  </div>
  <router-view />
  <div class="nota">
    <p><b>NOTA: </b>Debéis crear una función para que el password se oculte
    con asteriscos. Junto al password habrá un icono de un ojo abierto que,
    al pulsarlo, os dejará ver el password SOLO MIENTRAS ESTÉ EL BOTÓN DEL 
    RATÓN PULSADO. Cuando se suelte el botón del ratón, volverá a ocultarse
    el password con asteriscos. ESTO SERÁ UN COMPONENTE NUEVO QUE DEBÉIS CREAR.</p>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar{
  display:inline-flex;
  .nav-brand {
    margin-right: 80px;
  }
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

}
.nota {
    display:none;
    position:fixed;
    bottom:0px;
    width:100%;
    background:#0c0e11;
    color:#42b983;
    padding:10px;
    font-size: .9em;
  }
</style>

<script>
import LoginBox from "@/components/LoginBox";
export default {
  components: {
    LoginBox,
  },
};
</script>
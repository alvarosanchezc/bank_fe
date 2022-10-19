<template>


<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
  <router-link to="/" role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</router-link>

<div class="navbar-menu" id="navMenu">
  <!-- navbar-start, navbar-end... -->
</div>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Inicio
      </router-link>

      <router-link to="/store" class="navbar-item">
        Tienda
      </router-link>
      <router-link to="/about" class="navbar-item" go="./components/Login.vue">
            Sobre nosotros
          </router-link>
          <router-link to="/contacto" class="navbar-item">
            Contacto
          </router-link>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <router-link to="/signup" class="button is-primary">
            <strong>Registrarse</strong>
          </router-link>
          <router-link to="/login" class="button is-light">
            iniciar sesion
          </router-link>  
        
        </div>
      </div>
    </div>
  </div>
</nav>

<router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000000;
}

nav a.router-link-exact-active {
  color: #1460a7;
}
a:link, a:visited, a:active {
    text-decoration:none;
}
@import '~bulma/css/bulma.css';
</style>

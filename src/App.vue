<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/promocionate-d0ecc.appspot.com/o/pngwing.com.png?alt=media&token=3390d609-d8ef-40ce-b175-070929dc839f" width="60" height="35">
    </a>

  <a role="button" class="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
  <span aria-hidden="true"></span>
</a>
<div class="navbar-menu" id="navMenu">
  <!-- navbar-start, navbar-end... -->
</div>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Inicio
      </a>

      <a class="navbar-item">
        Tienda
      </a>
      <a class="navbar-item" href="./components/Login.vue">
            Sobre nosotros
          </a>
          <a class="navbar-item">
            Contacto
          </a>
      
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Registrarse</strong>
          </a>
          <a class="button is-light" href="Login">
            iniciar sesion
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            msg: "Hello World!"
        };
    },
}
document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Add a click event on each of them
$navbarBurgers.forEach( el => {
  el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

  });
});

});

</script>

<style>
@import '~bulma/css/bulma.css';
</style>

<template>
<form>
<input class="input is-primary" type="text" placeholder="Nombre">
<input class="input is-primary" type="text" placeholder="Apellido">
<input class="input is-primary" type="text" placeholder="Nombre de usuario">
<input class="input is-primary" type="text" placeholder="pais">
<input class="input is-primary" type="text" placeholder="ciudad">
<input class="input is-primary" type="text" placeholder="Direccion de residencia">
<input class="input is-primary" type="text" placeholder="Direccion de envio">
<input class="input is-primary" type="tel" placeholder="Celular">
<input class="input is-primary" type="email" placeholder="correo">
<input class="input is-primary" type="password" placeholder="contraseña">
<input class="input is-primary" type="text" placeholder="confirmar contraseña">
<button class="w-100 btn btn-lg btn-primary" type="submit">Registrarse</button>

</form>
</template>

<script>
export default {
    name: 'SignUpComponent',
    props: {
      msg: String
    }
  }
  </script>
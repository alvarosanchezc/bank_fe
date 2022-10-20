<template>
    <div class="about">
      <h1 class="h3 mb-3 fw-normal">Registrate</h1>
      <SignUp msg='REGISTRO'/>
    </div>
  </template>
  <script>
  // @ is an alias to /src
  import SignUp from '@/components/SignUpComponent.vue'
  
  export default {
    name: 'SignUpView',
    components: {
      SignUp
    }
  }
  </script>
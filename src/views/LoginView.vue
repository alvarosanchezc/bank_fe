<template class="text-center">
  <main class="form-signin">
  <form>
    <h1 class="h3 mb-3 fw-normal">Inicio de sesión</h1>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword" >Password</label>
    </div>
    <div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect01">
    <option selected>Tipo de usuario...</option>
    <option value="1">Cliente</option>
    <option value="2">Transportador</option>
    <option value="3">Vendedor</option>
  </select>
</div>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" > Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">© 2022</p>
  </form>
</main>
  </template>
  <style>

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
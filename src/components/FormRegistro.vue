<script setup>

import { ref } from 'vue';

const formulario = ref({
nombre: '',
apellido: '',
sexo: '',
edad: '',
user: '',
password: '',
conocimientos: ref([]),
admin: false,
observaciones: '',
grupo: ''
});

const usuario = ref(null);
const mensajeBienvenida = ref('');
const mostrarFormularioRegistro = ref(true);

function mostrarDatos(event) {
event.preventDefault();

usuario.value = {
  nombre: formulario.value.nombre,
  apellido: formulario.value.apellido,
  sexo: formulario.value.sexo,
  edad: formulario.value.edad,
  user: formulario.value.user,
  password: formulario.value.password,
  conocimientos: formulario.value.conocimientos.slice(),
  admin: formulario.value.admin,
  observaciones: formulario.value.observaciones,
  grupo: formulario.value.grupo
};
}

function mostrarBienvenida() {
if (usuario.value && usuario.value.user === formulario.value.user && usuario.value.password === formulario.value.password) {
  mensajeBienvenida.value = `¡Bienvenido, ${usuario.value.nombre} ${usuario.value.apellido}!`;

  const datosRegistro = [];
  for (const key in usuario.value) {
    datosRegistro.push(`${key}: ${usuario.value[key]}`);
  }
  parrafos.value = datosRegistro;
} else {
  mensajeBienvenida.value = 'Usuario o contraseña incorrectos';
  parrafos.value = [];
}
}
</script>
<template>
  <main>
    
    <TheWelcome />
  </main>

<div>
  <div v-if="mostrarFormularioRegistro">
    <form>
      <label for="nombre">
        Nombre
        <input type="text" id="nombre" v-model="formulario.nombre">
      </label>
      <br>
      <label for="apellido">
        Apellido
        <input type="text" id="apellido" v-model="formulario.apellido">
      </label>
      <br>
      <label>
        Sexo
        <br>
        <label for="sexo-M">
          Masculino
          <input type="radio" id="sexo-M" name="sexo" value="M" v-model="formulario.sexo">
        </label>
        <label for="sexo-F">
          Femenino
          <input type="radio" id="sexo-F" name="sexo" value="F" v-model="formulario.sexo">
        </label>
      </label>
      <br>
      <label for="edad">
        Edad
        <input type="number" id="edad" max="100" min="16" v-model="formulario.edad">
      </label>
      <br>
      <label for="user">
        Correo
        <input type="email" id="user" v-model="formulario.user">
      </label>
      <br>
      <label for="password">
        Contraseña
        <input type="password" id="password" v-model="formulario.password">
      </label>
      <br>
      <label for="conocimientos">
        Conocimientos
        <br>
        <label for="HTML">
          <input type="checkbox" id="HTML" value="HTML" v-model="formulario.conocimientos"> HTML
        </label>
        <label for="CSS">
          <input type="checkbox" id="CSS" value="CSS" v-model="formulario.conocimientos"> CSS
        </label>
        <label for="JS">
          <input type="checkbox" id="JS" value="JS" v-model="formulario.conocimientos"> JavaScript
        </label>
        <label for="Vue">
          <input type="checkbox" id="Vue" value="Vue" v-model="formulario.conocimientos"> Vue.js
        </label>
      </label>
      <br>
      <label for="permisos">
        <input type="checkbox" id="permisos" v-model="formulario.admin">
        ¿Usuario administrador?
      </label>
      <br>
      <button @click="mostrarDatos">Guardar</button>
      <input type="reset" name="Borrar">
      <p>
        ¿Ya cuentas con registro? <a href="#" @click="" false>Iniciar Sesión</a>
      </p>
    </form>
  </div>

</div>

  
</template>

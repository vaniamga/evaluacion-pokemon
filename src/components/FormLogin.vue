<template>
  <form @submit.prevent="login">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input v-model="email" type="email" class="form-control" id="email" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" id="password" required>
    </div>
    <button type="submit" class="btn btn-primary">Login</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      const getData = async() => {
  try {
    const res = await fetch('https://raw.githubusercontent.com/vaniamga/api-usuarios/main/usuarios/usuarios.json')
    posts.value = await res.json()
  } catch (error) {
    console.log(error)
    } finally{
      setTimeout (() => {
        loading.value = false
      }, 1000)
    }
  }
getData()

      console.log('Login con email:', this.email, 'y password:', this.password);
    },
  },
};
</script>

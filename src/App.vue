<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import AuthService from './services/auth.service';

export default {
  name: 'App',
  created() {
    const token = localStorage.getItem('token');
    if (token) {
      let authService = new AuthService();
      authService.setAuthHeaders(token);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

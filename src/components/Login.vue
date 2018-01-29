<template>
    <div class='login-form'>
     <h1>Login Form</h1>
     <form class='form'>
        <Input type="email" placeholder="Email" name="email" @onBlur="onEmailChange"/>
        <Input type="password" placeholder="Password" name="password" @onBlur="onChangePassword"/>
        <button type="button" @click="onSubmit">Login</button>
        <router-link to="Register" class='register'>Sign Up</router-link>
     </form>
    </div>
</template>

<script>
import Input from './CreateInput.vue';
import AuthService from '../services/auth.service';

export default {
  name:'Login',
  components: {
      Input
  },
  methods: {
      onEmailChange(email) {
          this.email = email;
      },
      onChangePassword(password) {
          this.password = password;
      },
      onSubmit() {
          this.authService.login({
              email: this.email,
              password: this.password
          }).then((response) => {
              
              localStorage.setItem('token', response.data.token);
              console.log(response.data);
              this.$router.push('todo')
          });
      }
  },
  created() {
      this.authService = new AuthService();
  }
}
</script>

<style>
    .login-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form {
        width: 500px;
        display: flex;
        flex-direction:column;
    }
    button {
        padding: 10px 25px;
        margin: 10px 0;
        border-radius: 4px;
        cursor: pointer;
        border:1px solid gray;
    }
    .register{
        text-decoration: none;
        margin-top: 15px;
        color:black;
    }
</style>


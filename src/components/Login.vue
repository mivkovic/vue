<template>
    <div class='login-form'>
     <h1>Login Form</h1>
     <form class='form'>
        <Input type="email" placeholder="Email" name="email" @onBlur="onEmailChange"/>
        <Input type="password" placeholder="Password" name="password" @onBlur="onChangePassword"/>
        <button type="button" @click="onSubmit">Login</button>
     </form>
    </div>
</template>

<script>
import Input from './CreateInput.vue';
import { AuthService } from '../services/auth.service';

export default {
  name:"Login",
  components: {
      Input
  },
  data() {
      return {
        email: '',
        pass: ''
      }
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
              console.log(response.data);
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
</style>


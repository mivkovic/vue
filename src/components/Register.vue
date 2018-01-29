<template>
   <div class='register-form'>
     <h1>Register Form</h1>
     <form class='form'>
        <Input type='text' placeholder="First Name" name="firstName" @onBlur="onFNameChange"/>
         <Input type='text' placeholder="Last Name" name="lastName" @onBlur="onNameChange"/>
        <Input type="email" placeholder="Email" name="email" @onBlur="onEmailChange"/>
        <Input type='text' placeholder="Company" name="company" @onBlur="onCompanyChange"/>
        <select name="country" v-model="selected" >
            <option :key="country" v-for="country in countries" v-bind:value="country">{{ country }}</option>
        </select>
        <Input type="password" placeholder="Password" name="password" @onBlur="onChangePassword"/>
        <button type="button" @click="onSubmit">Register</button>
     </form>
    </div>
</template>

<script>
import Input from './CreateInput.vue';
import AuthService from '../services/auth.service';

export default {
  name:'Register',
  components: {
      Input
  },
  data() {
      return {
          countries: [],
          selected: '',
          firstName: '',
          lastName: '',
          password: '',
          company: '',
          country: ''
      }
  },
  methods: {
       onNameChange(name) {
          this.lastName = name;
      },
      onFNameChange(fname) {
          this.firstName = fname;
      },
       onChangePassword(password) {
          this.password = password;
      },
      onCompanyChange(company) {
          this.company = company;
      },
       onEmailChange(email) {
          this.email = email;
      },
       onSubmit(e) {
         e.preventDefault();
         alert(this.email)
          this.authService.register({
              firstName: this.firstName,
              lastName: this.lastName,
              country: this.selected,
              company: this.company,
              email: this.email,
              password: this.password
          }).then((response) => {
              console.log(response.data);
              this.$router.push('/todo');
          });
      }
  },
  created() {
        this.authService = new AuthService();
        this.authService.countries().then(data => {this.countries.push(...data); console.log(this.countries) })
  }
}

</script>

<style>
    select {
        padding: 10px 25px;
        margin: 10px 0;
        border-radius: 4px;
        border:1px solid gray;
    }
    .register-form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .form {
        width: 500px;
        display: flex;
        flex-direction:column;
    }
    button{
         padding: 10px 25px;
         margin: 10px 0;
         border-radius: 4px;
         cursor: pointer;
         border:1px solid gray;
    }
</style>

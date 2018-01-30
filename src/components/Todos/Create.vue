<template>
  <div>
    <h1>Create New Todo</h1>
    <form action="/todo" method="PUT">
      <input type="text" name="name" v-model="todoName" placeholder="Name">
      <input type="number" name="priority" v-model="todoPriority" placeholder="Priority">
      <button @click.prevent="onSubmit">Submit</button>
    </form>
     <router-link to="/todo">See all todos</router-link>
  </div>

</template>

<script>
import TodoService from '../../services/todo.service'

export default {
  data() {
    return {
      todoName: '',
      todoPriority: '',
      todoCompleted: false
    }
  },
  methods: {
    onSubmit(){
      this.todoService.createTodo({name: this.todoName, priority: this.todoPriority, completed: this.todoCompleted}).then(response =>  this.$router.push('/todo'));
     
    }
  },
  created(){
    this.todoService = new TodoService();
  }
}
</script>

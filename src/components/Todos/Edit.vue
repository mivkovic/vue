<template>
    <div>
        <input type="text" name="name" v-model="todo.name">
        <input type="number" name="priority" v-model="todo.priority"> 
        <button @click="saved">Save</button> 
    </div>
</template>

<script>
import TodoService from '../../services/todo.service'

export default {
  data() {
      return {
          todo: ''
      }
  },
  methods: {
      getTodo() {
          const id = this.$route.params.id
          this.todoService.getTodo(id).then(response => {
              this.todo = response.data
          })    
      },
      saved() {
          this.todoService.updateTodo(this.todo.id, this.todo).then(response =>{ console.log(response.data); this.$router.push('/todo')})
      }
    },
 created() {
     this.todoService = new TodoService();
     this.getTodo()
 }
}
</script>

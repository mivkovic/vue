<template>
    
  <div>
        <li @click="onChange">{{ name }} <span v-if="this.completed">X</span> </li><span @click="deleteTodo"> DELETE </span>
        <span @click.prevent="goEdit"> EDIT </span>
  </div>
</template>

<script>
import TodoService from '../../services/todo.service';

export default {
  props: ['name','completed','priority','userId','id'],
  methods: {
    onChange() {
      this.todoService.updateTodo(this.id, {name: this.name, priority: this.priority, completed: !Boolean(this.completed), id: this.id, user_id: this.userId})
        .then(response => this.$emit('onTodoUpdate', response.data))
    },
    deleteTodo(){
      this.todoService.deleteTodo(this.id).then(response => this.$emit('onTodoDeleted', response.data))
    },
    goEdit() {
      this.$router.push({ path: `/todos/edit/${this.id}`})
    }
  },
  created() {
    this.todoService = new TodoService();
  } 
}
</script>

<style>

</style>

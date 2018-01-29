<template>
    <div>
        <h1>Todos</h1>
        <ul>
            <show-todo :key="index" v-for="(todo, index) in todos" :name="todo.name" :completed="todo.completed" :priority="todo.priority" ></show-todo>
        </ul>
    </div>
</template>

<script>
import TodoService from '../../services/todo.service';
import ShowTodo from './ShowTodo.vue';

export default {
  data() {
      return {
          todos: []
      }
  },
  components: {
      'show-todo': ShowTodo
  },
  methods: {
     fetchData() {
         this.todoService.getTodos().then(data => {this.todos.push(...data) });
     }
  },
  created() {
    this.todoService = new TodoService();
    this.fetchData();
  }
}
</script>


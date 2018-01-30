<template>
    <div>
        <h1>Todos</h1>
        <ul>
            <show-todo @onTodoUpdate="todoUpdated" @onTodoDeleted="todoDeleted" :key="index" v-for="(todo, index) in orderedTodos"  :name="todo.name" :userId="todo.user_id" :id="todo.id" :completed="todo.completed" :priority="todo.priority"></show-todo>
        </ul>

        <router-link to="todos/create">New Todo</router-link>
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
         this.todoService.getTodos().then(data => {this.todos.push(...data);});
     },
     todoUpdated(newTodo) {
         let todo = this.todos.find(todo => todo.id === newTodo.id);
         todo.completed = newTodo.completed;
     },
     todoDeleted(oldTodo) {
         let todos = this.todos.filter(todo => {
             return todo.id !== oldTodo;
         })

         this.todos = [...todos];
     }
  },
  computed: {
      orderedTodos() {
          return this.todos.sort((first, second) => first.completed > second.completed);
      }
  },
  created() {
    this.todoService = new TodoService();
    this.fetchData();
  }
}
</script>


import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ShowTodos from '@/components/Todos/ShowTodos'
import Create from '@/components/Todos/Create'
import Edit from '@/components/Todos/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/todo',
      name: 'ShowTodos',
      component: ShowTodos
    },
    {
      path: '/todos/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/todos/edit/:id',
      name: 'Edit',
      component: Edit
    }
  ]
})

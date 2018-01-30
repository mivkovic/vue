import { API_URL } from '../constants'
import axios from 'axios'

const ENDPOINTS = {
  'TODOS': 'todos',
  'POST': 'todos/create',
  'EDIT': 'todos/edit'
}

class TodoService {
  getTodos () {
    return axios.get(API_URL + ENDPOINTS.TODOS).then(response => response.data)
  }

  createTodo (data) {
    return axios.post(API_URL + ENDPOINTS.POST, data)
  }
  
  updateTodo (id, data) {
    return axios.put(API_URL + ENDPOINTS.TODOS + `/${id}`, data)
  }

  deleteTodo (id) {
    return axios.delete(API_URL + ENDPOINTS.TODOS + `/${id}`)
  }

  getTodo (id) { 
    return axios.get(API_URL + ENDPOINTS.EDIT + `/${id}`)
  }

}

export default TodoService
import { API_URL } from '../constants'
import axios from 'axios'

const ENDPOINTS = {
  'TODOS': 'todos',
  'POST': 'todos/create'
}

class TodoService {
  getTodos () {
    return axios.get(API_URL + ENDPOINTS.TODOS).then(response => response.data)
  }

  createTodo (data) {
    return axios.post(API_URL + ENDPOINTS.POST, data)
  }
  
}

export default TodoService
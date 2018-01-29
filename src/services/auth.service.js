import { API_URL } from '../constants'
import axios from 'axios'

const ENDPOINTS = {
  'LOGIN': 'login',
  'REGISTER': 'register',
  'COUNTRIES': 'countries'
}
class AuthService {
  login (data) {
    return axios.post(API_URL + ENDPOINTS.LOGIN, data).then((response) => {
      axios.defaults.headers['Authorization'] = `Bearer ${response.data.token}`
    })
  }

  register (data) {
    return axios.post(API_URL + ENDPOINTS.REGISTER, data)
  }

  countries () {
    return axios.get(API_URL + ENDPOINTS.COUNTRIES).then(response => response.data)
  }
}

export default AuthService

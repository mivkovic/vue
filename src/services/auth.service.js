import { API_URL } from '../constants';
import axios from 'axios';

const ENDPOINTS = {
    'LOGIN': 'login'
};

export default class AuthService {
    login(data) {
        return axios.post(API_URL + ENDPOINTS.LOGIN, data);
    }
}
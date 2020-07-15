import axios from 'axios';

const api = axios.create({
    baseURL: 'https://controle-acesso-pweb.herokuapp.com'
});

export default api;
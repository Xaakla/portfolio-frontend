import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfoliobackapi.herokuapp.com/',
    // baseURL: 'http://192.168.0.106:3333/',
});

export default api;
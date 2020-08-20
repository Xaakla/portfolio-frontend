import axios from 'axios';

const api = axios.create({
    baseURL: 'https://portfoliobackapi.herokuapp.com/',
});

export default api;
import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://mocki.io/v1/'
})
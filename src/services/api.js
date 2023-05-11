import axios from 'axios';

export const key = "eea28bb9cc4cc42c59cc1dd94cae8350def5af49";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4/',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;
import axios from 'axios'; // allow to call APIs

const api = axios.create({
    baseURL: 'http://localhost:3333', // this URL will be used for all apis requests
});

export default api; 
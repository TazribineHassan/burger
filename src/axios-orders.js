import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-b0f30-default-rtdb.firebaseio.com'
});

export default instance;
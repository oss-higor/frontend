import axios from 'axios';

const api= axios.create({
    baseURL:"https://ossappomni.herokuapp.com",
});

export default api;
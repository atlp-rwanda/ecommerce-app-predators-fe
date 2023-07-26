import axios from 'axios';


const baseURL = "https://ecommercepredators.onrender.com/api/"

const API_URL = axios.create({

    baseURL,

});

export default API_URL;

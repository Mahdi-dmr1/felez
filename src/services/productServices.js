import axios from 'axios';

const SERVER_URL = "http://localhost:8000";

export const getAllProducts = () => {
    const url = `${SERVER_URL}/main`;
    return axios.get(url);
}

export const getProduct = (productId) => {
    const url = `${SERVER_URL}/main/${productId}`;
    return axios.get(url);
}

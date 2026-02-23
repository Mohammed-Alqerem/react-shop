import axios from "axios";

const authAxiosInstance = axios.create({
    baseURL:'https://knowledgeshop.runasp.net/api',
    headers:{
       'Accept-Language':'en',
       'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
    }

});

export default authAxiosInstance;
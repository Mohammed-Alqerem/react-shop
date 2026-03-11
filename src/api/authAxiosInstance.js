import axios from "axios";
import i18n from "../../i18next";

const authAxiosInstance = axios.create({
    baseURL:'https://knowledgeshop.runasp.net/api',
    headers:{
       'Authorization':`Bearer ${localStorage.getItem('accessToken')}`
    }

});


authAxiosInstance.interceptors.request.use((config)=>{
    config.headers['Accept-Language'] = i18n.language;
    return config;
})

export default authAxiosInstance;
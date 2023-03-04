import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        console.log('Interceptor 성공');
        return config;
    },
    (config) => {
        return config;
    }
)

export default axios;
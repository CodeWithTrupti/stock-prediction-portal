import axios from "axios";


const baseURL = import.meta.env.VITE_BACKEND_BASE_API
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers :{
        'Content-Type' : 'application/json',
    }
})
// request interceptor
axiosInstance.interceptors.request.use(
    function(config){
        
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)
// response interceptor
axiosInstance.interceptors.response.use(
    function(response){
        return response;
    },
    //handle failed responses
    function(error){
        const originalRequest = error.config;
        if(error.response.status === 401 && !originalRequest.retry){
            originalRequest.retry = true;
            const refreshToken = localStorage.getItem('refreshToken')
            try{
                const response = axiosInstance.post


            }catch(error){
                return false;

            }

        }
    }
)


export default axiosInstance;
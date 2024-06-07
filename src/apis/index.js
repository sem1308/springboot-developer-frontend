import axios from 'axios'

const api = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL, 
});


// 인터셉터 추가
api.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token');
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});
  
export default api;
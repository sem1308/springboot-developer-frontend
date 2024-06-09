import { getCookie } from '@/js/web';
import axios from 'axios'
import { refresh } from './user-api';

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

api.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
}, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    const response = error.response;
    const refreshToken = getCookie("refresh_token")
    // console.log(response)
    // console.log(refreshToken)
    if (response.status === 401 && refreshToken) {
        refresh(
            refreshToken,
            (response) => {
                // console.log(response)
                const data = response.data;
                // 재발급이 성공하면 로컬 스토리지값을 새로운 액세스 토큰으로 교체
                localStorage.setItem("access_token", data.accessToken);
            }
        )
    } else {
        // 응답 오류가 있는 작업 수행
        return Promise.reject(error);
    }
});

export default api;
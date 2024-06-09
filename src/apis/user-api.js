import api from "@/apis";

const createUser = (user, success, fail) => {
    const url = `/users`;
    api.post(url, user)
        .then(success)
        .catch(fail)
}

const login = (user, success, fail) => {
    const url = `/auth/login`;
    api.post(url, user)
        .then(success)
        .catch(fail)
}

const logout = (user, success, fail) => {
    const url = `/auth/logout`;
    api.post(url, user)
        .then(success)
        .catch(fail)
}

const refresh = (refreshToken, success, fail) => {
    const url = `/auth/refresh`;
    api.post(url, { refreshToken })
        .then(success)
        .catch(fail)
}

export {
    createUser,
    login,
    logout,
    refresh
}
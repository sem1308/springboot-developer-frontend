import api from "@/apis";

const createUser = (user,success,fail) => {
    const url = `/users`;
    return api
        .post(url, user)
        .then(success)
        .catch(fail)
}

const login = (user,success,fail) => {
    const url = `/auth/login`;
    return api
        .post(url, user)
        .then(success)
        .catch(fail)
}

export {
    createUser,
    login
}
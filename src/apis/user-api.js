import axios from "axios";
import { BASE_URL } from "./url";

const createUser = (user) => {
    const url = `/users`;
    return axios
        .post(BASE_URL + url, user)
        .then((response) => response.data)
        .catch((error) => error)
}

const login = (user) => {
    const url = `/users/login`;
    return axios
        .post(BASE_URL + url, user)
        .then((response) => response)
        .catch((error) => error)
}

export {
    createUser,
    login
}
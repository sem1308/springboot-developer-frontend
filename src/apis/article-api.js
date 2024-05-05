import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

const getArticleList = () => {
    const url = "/articles";
    return axios
        .get(BASE_URL + url)
        .then((response) => response.data)
        .catch((error) => error)
}

const getArticle = (id) => {
    const url = `/articles/${id}`;
    return axios
        .get(BASE_URL + url)
        .then((response) => response.data)
        .catch((error) => error)
}

const deleteArticle = (id) => {
    const url = `/articles/${id}`;
    return axios
        .delete(BASE_URL + url)
        .then((response) => response)
        .catch((error) => error)
}

const updateArticle = (article) => {
    const url = `/articles/${article.id}`;
    return axios
        .patch(BASE_URL + url, article)
        .then((response) => response.data)
        .catch((error) => error)
}

const createArticle = (article) => {
    const url = `/articles`;
    return axios
        .post(BASE_URL + url, article)
        .then((response) => response.data)
        .catch((error) => error)
}

export {
    BASE_URL,
    getArticleList,
    getArticle,
    deleteArticle,
    updateArticle,
    createArticle
}
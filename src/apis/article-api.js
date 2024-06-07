import axios from '@/apis'

const getArticleList = (success, fail) => {
    const url = "/articles";
    return axios
        .get(url)
        .then(success)
        .catch(fail)
}

const getArticle = (id,success, fail) => {
    const url = `/articles/${id}`;
    return axios
        .get(url)
        .then(success)
        .catch(fail)
}

const deleteArticle = (id,success, fail) => {
    const url = `/articles/${id}`;
    return axios
        .delete(url)
        .then(success)
        .catch(fail)
}

const updateArticle = (article,success, fail) => {
    const url = `/articles/${article.id}`;
    return axios
        .patch(url, article)
        .then(success)
        .catch(fail)
}

const createArticle = (article,success, fail) => {
    const url = `/articles`;
    return axios
        .post(url, article)
        .then(success)
        .catch(fail)
}

export {
    getArticleList,
    getArticle,
    deleteArticle,
    updateArticle,
    createArticle
}
import axios from "axios";
const URL = `https://nc-news-project5.onrender.com/api`;


export const fetchAllArticles = (article) => {
    return axios
        .get(`${URL}/articles`)
        .then((response) => {
            return response.data.articles;
        });
}

export const fetchArticleById = (article_id) => {
    return axios
        .get(`${URL}/articles/${article_id}`)
        .then((response) => {
            return response.data.article;
        })
}

export const signIn = (username) => {
    return axios
        .get(`${URL}/users`)
        .then((response) => {
            const result = response.data.users.filter(user => user.username === username);

            if (result.length > 0) {
                return result[0]
            }

            return undefined;
        });
}
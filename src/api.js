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

export const fetchComments = (article_id) => {
    return axios
        .get(`${URL}/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments;
        });
}

export const postComment = (article_id, comment) => {

    return axios
        .post(`${URL}/articles/${article_id}/comments`, comment)
        .then((response) => {
            return response.data.comment;
        });
};

export const voteOnArticle = (article_id, voteType) => {
    return axios
        .patch(`${URL}/articles/${article_id}`, { inc_votes: voteType === 'up' ? 1 : -1 })
        .then((response) => {
            return response.data.article;
        });
};

export const getAllUsers = () => {
    return axios
        .get(`${URL}/users`)
        .then((response) => {
            return response.data.users;
        });
}

export const fetchArticlesByTopic = (topic) => {
    return axios
        .get(`${URL}/articles?topic=${topic}`)
        .then((response) => {
            return response.data.topic;
        })
};


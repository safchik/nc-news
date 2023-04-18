import axios from "axios";


export const fetchAllArticles = (article) => {
    return axios
        .get(`https://nc-news-project5.onrender.com/api/articles`)
        .then((response) => {
            return response.data.articles;
        });
}


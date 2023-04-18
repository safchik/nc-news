import { useEffect, useState } from "react";

function AllArticles() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch(`https://nc-news-project5.onrender.com/api/articles`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setArticles(data.articles);
            });
    }, []);

    return (
        <div>
            <h2>Articles</h2>
            {articles.map((article) => {
                return (
                    <div key={article.article_id}>
                        <p>Title: {article.title}</p>
                        <p>Topic: {article.topic}</p>
                        <p>Author: {article.author}</p>
                        <img src={article.article_img_url}></img>
                        <p>Body: {article.body}</p>
                        <p>Comments: {article.comments}</p>
                        <p>Votes: {article.votes}</p>
                        <p>Created at: {article.created_at}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default AllArticles;
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';
import Comments from "./Comments";
import '../styles.css';

const SingleArticle = () => {
    const [isLoading, setLoading] = useState(true);
    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    useEffect(() => {
        fetchArticleById(article_id)
            .then((articleData) => {
                setArticle(articleData);
                setLoading(false);
            });
    }, [article_id]);

    return (
        <section id="article">
            <h2>Article</h2>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <div>
                    <p>Title: {article.title}</p>
                    <p>Topic: {article.topic}</p>
                    <p>Author: {article.author}</p>
                    <img src={article.article_img_url} alt={article.title}></img>
                    <p>Body: {article.body}</p>
                    <p>Created at: {article.created_at}</p>
                    <p>Votes: {article.votes}</p>
                    <p>Comments: {article.comments}</p>
                    <Comments article_id={article_id} />
                </div>
            )}
        </section>
    )
}

export default SingleArticle;
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const { article_id } = useParams();

    useEffect(() => {
        fetchArticleById(article_id)
            .then((articleData) => {
                setArticle(articleData);
            });
    }, [article_id]);

    return (
        <li key={article.article_id}>
            <p>Title: {article.title}</p>
            <p>Topic: {article.topic}</p>
            <p>Author: {article.author}</p>
            <img src={article.article_img_url} alt={article.title}></img>
            <p>Body: {article.body}</p>
            <p>Created at: {article.created_at}</p>
            <p>Comments: {article.comments}</p>
            <p>Votes: {article.votes}</p>
        </li>
    )
}

export default SingleArticle;
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';
import { voteOnArticle } from '../api';
import Comments from "./Comments";
import '../styles.css';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SingleArticle = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [voteError, setVoteError] = useState(null);
    const { article_id } = useParams();

    useEffect(() => {
        fetchArticleById(article_id)
            .then((articleData) => {
                setArticle(articleData);
                setLoading(false);
            });
    }, [article_id]);

    const handleVote = (voteType) => {
        const newVotesCount = voteType === 'up' ? article.votes + 1 : article.votes - 1;
        setArticle({ ...article, votes: newVotesCount });
        voteOnArticle(article_id, voteType)
            .then((newArticle) => {
                setArticle(newArticle);
            })
            .catch((error) => {
                setVoteError(error.message);
                setArticle({ ...article, votes: article.votes });
            });
    };

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
                    <p>
                        Votes: {article.votes} &nbsp;
                        <button className="upvote-button" onClick={() => handleVote('up')}>
                            <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button className="downvote-button" onClick={() => handleVote('down')}>
                            <FontAwesomeIcon icon={faThumbsDown} />
                        </button>
                    </p>
                    {voteError && <p>Error: {voteError}</p>}
                    <p>Comments: {article.comments}</p>
                    <Comments article_id={article_id} />
                </div>
            )
            }
        </section >
    )
}

export default SingleArticle;
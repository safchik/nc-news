import { useEffect, useState } from "react";
import { fetchComments } from "../api";
import "./comments.css";

function Comments({ article_id }) {
    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [isExpanded, setExpanded] = useState(false);

    useEffect(() => {
        fetchComments(article_id).then((commentsData) => {
            setComments(commentsData);
            setLoading(false);
        });
    }, [article_id]);

    const handleToggleClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <section id="comments">
            <button className="accordion" onClick={handleToggleClick}>
                {isExpanded ? "Hide comments" : "Show comments"}
            </button>
            <div className={`panel ${isExpanded ? "expanded" : ""}`}>
                {isLoading ? (
                    <h3>Loading...</h3>
                ) : comments.length === 0 ? (
                    <p>No comments to display.</p>
                ) : (
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.comment_id}>
                                <p>{comment.body}</p>
                                <p>By: {comment.author}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Comments;

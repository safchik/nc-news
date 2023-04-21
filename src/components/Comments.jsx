import { useEffect, useState } from "react";
import { fetchComments, postComment } from "../api";
import "../styles.css";
import { useContext } from "react";
import { UserContext } from "../contexts/User";

function Comments({ article_id }) {

    const [isLoading, setLoading] = useState(true);
    const [comments, setComments] = useState([]);
    const [isExpanded, setExpanded] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [commentSubmitted, setCommentSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(null);
    const [newComment, setNewComment] = useState('');
    const user = useContext(UserContext);

    useEffect(() => {
        fetchComments(article_id).then((commentsData) => {
            setComments(commentsData);
            setLoading(false);
        });
    }, [article_id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(newComment, user)
        postComment(article_id, { body: newComment, username: user.username })
            .then((response) => {
                setComments([...comments, response]);
                setCommentSubmitted(true);
                setNewComment("");
            })
            .catch((error) => {
                setSubmitError(error.message);
            })
            .finally(() => {
                setIsSubmitting(false);
            });

        setIsSubmitting(true);
        setSubmitError(null);
    };

    const handleToggleClick = () => {
        setExpanded(!isExpanded);
    };

    return (
        <section id="comments">
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Your comment:
                        <textarea value={newComment} onChange={(event) => setNewComment(event.target.value)} />
                    </label>
                    {submitError && <p>Error: {submitError}</p>}
                    <button className="commentsubmit" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                    {commentSubmitted && <p>Your comment has been submitted successfully!</p>}
                </form>
            </div>

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
                                <p>Created at: {comment.created_at}</p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
}

export default Comments;

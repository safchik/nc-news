import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";


function AllArticles() {

    const [isLoading, setLoading] = useState(true);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetchAllArticles().then((articles) => {
            setList(articles);
            setLoading(false);
        })
    }, []);

    return (
        <section id="articles">
            <h2>All Articles</h2>
            {isLoading ? (
                <h3>Loading...</h3>
            ) : (
                <ul>
                    {list.map((article) => {
                        return (
                            <li key={article.article_id}>
                                <p>Title: {article.title}</p>
                                <p>Topic: {article.topic}</p>
                                <p>Author: {article.author}</p>
                                <p>Body: {article.body}</p>
                                <p>Created at: {article.created_at}</p>
                                <p>Votes: {article.votes}</p>
                                <p>Comments: {article.comments}</p>
                                <img src={article.article_img_url}></img>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}

export default AllArticles;
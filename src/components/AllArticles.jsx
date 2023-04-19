import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api";
import { Link } from 'react-router-dom';


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
                            <div key={article.article_id}>
                                <Link to={`/articles/${article.article_id}`}>
                                    <h4>Title: {article.title}</h4>
                                </Link>
                                <p>Topic: {article.topic}</p>
                                <Link to={`/articles/${article.article_id}`}>
                                    <img src={article.article_img_url} alt="article"></img>
                                </Link>
                                <p>Body: {article.body}</p>
                            </div>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}

export default AllArticles;
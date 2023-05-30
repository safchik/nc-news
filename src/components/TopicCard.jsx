import React, { useEffect, useState } from 'react';
import { fetchArticlesByTopic } from '../api';
import AllArticles from './AllArticles';

const TopicCard = ({ match }) => {
  const [isLoading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const { topic } = match.params;

  useEffect(() => {
    fetchArticlesByTopic(topic).then((data) => {
      setArticles(data);
      setLoading(false);
    });
  }, [topic]);

  return (
    <div>
      <h1>Topic</h1>
      {isLoading ? (
        <p>Loading articles...</p>
      ) : (
        <AllArticles articles={articles} />
      )}
    </div>
  );
};

export default TopicCard;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../../store/actions/articlesActions';
import Loader from '../loader';
import Article from './article';

const ArticlesList = () => {
  const articles = useSelector(state => state.articles.articles);

  const dispatch = useDispatch();
  const fetch = () => dispatch(fetchArticles());

  useEffect(() => {
    if (!articles.length) {
      fetch();
    }
  }, []);

  if (!articles.length) {
    return (
      <Loader/>
    );
  }

  return (
    <>
      {articles.map((article) => <Article article={article} key={article.id}/>)}
    </>
  );
};

export default ArticlesList;

import React from 'react';
import ArticlesList from '../components/articles/articlesList';
import TabBar from '../components/tabbar/tabBar';

const Articles = () => (
  <>
    <div className="content">
      <ArticlesList/>
    </div>
    <TabBar/>
  </>
);

export default Articles;

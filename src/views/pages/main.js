import React from 'react';
import PetsList from '../components/petsList/petsList';
import TabBar from '../components/tabbar/tabBar';

const Main = () => (
  <>
    <div className="content">
      <PetsList />
    </div>
    <TabBar />
  </>
);

export default Main;

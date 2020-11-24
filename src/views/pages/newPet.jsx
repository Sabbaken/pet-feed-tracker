import React from 'react';
import TabBar from '../components/tabbar/tabBar';
import NewPetCard from '../components/newPet/newPetCard';

const NewPet = () => {
  return (
    <>
      <div className="content">
        <NewPetCard/>
      </div>
      <TabBar/>
    </>
  );
};

export default NewPet;

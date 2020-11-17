import React from 'react';
import Loader from '../loader';
import { useSelector } from 'react-redux';
import PetItem from './petItem';

const PetsList = () => {
  let profile = useSelector((state) => state.firebase.profile);
  let { pets } = profile;

  if (profile.isLoaded === false) {
    return (
      <Loader/>
    );
  }
  return (
    <div>
      {pets.map((pet) => <PetItem pet={pet}/>)}
    </div>
  );
};

export default PetsList;

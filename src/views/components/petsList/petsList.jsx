import React from 'react';
import Loader from '../loader';
import { useSelector } from 'react-redux';
import PetItem from './petItem';
import Card from '../cards/card';
import { Link } from 'react-router-dom';

const PetsList = () => {
  let profile = useSelector((state) => state.firebase.profile);
  let { pets } = profile;

  if (profile.isLoaded === false) {
    return (
      <Loader/>
    );
  }

  if (pets === undefined) {
    pets = [];
  }

  if (!pets.length) {
    return (
      <Card>
        <div className="text text-primary">
          У вас пока нет питомцев.
        </div>
        <Link className="link link-primary" to={'/add'}>Добавить</Link>
      </Card>
    );
  }

  return (
    <div>
      {pets.map((pet) => <PetItem key={pet.id} pet={pet}/>)}
    </div>
  );
};

export default PetsList;

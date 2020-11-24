import React, { useState } from 'react';
import Card from '../cards/card';
import { useDispatch } from 'react-redux';
import { addNewPet } from '../../../store/actions/petsActions';

const NewPetCard = () => {
  const [name, setName] = useState('');

  const dispatch = useDispatch();
  const addPet = (name) => dispatch(addNewPet(name));

  const handleSubmit = () => {
    addPet(name);
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <Card>
      <label className="input__label">Имя питомца</label>
      <input className="input input__input" onChange={handleChange} value={name} type="text" name=""
             id=""/>
      <button className="btn btn-primary" onClick={handleSubmit}>Добавить</button>
    </Card>
  );
};

export default NewPetCard;

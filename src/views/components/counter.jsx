import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../../store/actions/petsActions';

const Counter = ({ petId }) => {
  const [amount, setAmount] = useState(1);
  const posting = useSelector((state) => state.pets.posting)
  const dispatch = useDispatch();
  const addFeedData = (amount, petId) => dispatch(addFeed(amount, petId));

  const handleChange = (delta) => {
    setAmount((prevAmount) => {
      if ((prevAmount > 0.5) && (delta < 0)) {
        return prevAmount + delta;
      }

      if ((prevAmount < 2) && (delta > 0)) {
        return prevAmount + delta;
      }

      return prevAmount;
    })
  }

  const handleSubmit = () => {
    addFeedData(amount, petId);
  }

  let btnClassName = 'btn btn-primary counter__submit'
  if (posting) {
    btnClassName = 'btn btn-primary btn--loading counter__submit'
  }

  return (
    <div>
      <div className="counter__wrapper">
        <div className="counter__label">Размер порции</div>
        <div className="counter">
          <img onClick={() => handleChange(-0.5)} src="./images/icons/minus-circle.svg"
               alt="subtract 0.5"/>
          <span className="counter__amount">{amount}</span>
          <img onClick={() => handleChange(0.5)} src="./images/icons/plus-circle.svg"
               alt="add 0.5"/>
        </div>
      </div>
      <button onClick={handleSubmit} className={btnClassName} disabled={posting}>Добавить</button>
    </div>
  );
};

export default Counter;

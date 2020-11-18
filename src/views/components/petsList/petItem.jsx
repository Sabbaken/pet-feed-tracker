import React from 'react';
import SlideToggle from 'react-slide-toggle';
import Card from '../cards/card';

const PetItem = ({ pet }) => {
  const { name, feeds } = pet;

  return (
    <SlideToggle
      collapsed
      render={({ toggle, toggleState, setCollapsibleElement }) => (
        <Card>
          <div className="pet-card__top" onClick={toggle}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pet-feed-tracker.appspot.com/o/pets-profile-pictures%2Fcat.png?alt=media&token=11cef281-594d-44c7-b945-f63666cead13"
              alt="cat"
              className="pet-card__photo"/>

            <div>
              <div className="text text-header">{name}</div>
              <div className="text text-secondary">кормили 2 часа назад</div>
            </div>

            <img src="./images/icons/chevron-down.svg"
                 alt="arrow"
                 className={toggleState === "EXPANDED" || toggleState === "EXPANDING" ? "pet-card__toggle pet-card__toggle--opened" : "pet-card__toggle"}/>
          </div>

          <div className="pet-card__bottom" ref={setCollapsibleElement}>
            <div>
              календарь
              <br/>
              <br/>
              ======
            </div>
            <div>
              кнопочки
              <br/>
              <br/>
              ======
            </div>
          </div>
        </Card>
      )}
    />
  );
};

export default PetItem;

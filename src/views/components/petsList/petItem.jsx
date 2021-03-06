import React from 'react';
import SlideToggle from 'react-slide-toggle';
import Card from '../cards/card';
import Counter from '../counter';
import Calendar from '../calendar/calendar';
import TimeAgo from 'javascript-time-ago';
import ru from 'javascript-time-ago/locale/ru';

const PetItem = ({ pet }) => {
  const { name, feeds, id } = pet;
  const lastFed = feeds[feeds.length - 1];

  TimeAgo.addLocale(ru);
  const timeAgo = new TimeAgo('ru-RU');
  let lastFedString = '0 мин назад';
  if (lastFed !== undefined) {
    lastFedString = timeAgo.format(new Date(lastFed.timestamp));
  }

  return (
    <SlideToggle
      collapsed
      render={({ toggle, toggleState, setCollapsibleElement }) => (
        <Card>
          <div className="pet-card__top clickable" onClick={toggle}>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/pet-feed-tracker.appspot.com/o/pets-profile-pictures%2Fcat.png?alt=media&token=11cef281-594d-44c7-b945-f63666cead13"
              alt="cat"
              className="pet-card__photo"/>

            <div>
              <div className="text text-header">{name}</div>
              <div className="text text-secondary">кормили {lastFedString}</div>
            </div>

            <img src="./images/icons/chevron-down.svg"
                 alt="arrow"
                 className={toggleState === "EXPANDED" || toggleState === "EXPANDING" ? "pet-card__toggle pet-card__toggle--opened" : "pet-card__toggle"}/>
          </div>

          <div className="pet-card__bottom" ref={setCollapsibleElement}>
            <Calendar petId={id}/>
            <Counter petId={id}/>
          </div>
        </Card>
      )}
    />
  );
};

export default PetItem;

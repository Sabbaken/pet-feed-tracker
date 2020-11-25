import React from 'react';

const CalendarColumn = ({ day }) => {
  const { name, feeds } = day;
  const totalFeed = feeds.reduce((total, feed) => (total + feed.amount), 0);

  const height = totalFeed > 0? 20 * totalFeed : 5;
  const style = {
    height: `${height}px`
  }

  return (
    <div className="calendar__column">
      <span className="calendar__number">{totalFeed > 0 && totalFeed}</span>
      <div className="calendar__line" style={style}/>
      <span className="calendar__week-day">{name}</span>
    </div>
  );
};

export default CalendarColumn;

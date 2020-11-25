import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedsByDays } from '../../../store/actions/petsActions';
import CalendarColumn from './calendarColumn';

const Calendar = ({ petId }) => {
  let feedsByDays = useSelector((state) => state.pets.feedsByDays[petId]);
  const dispatch = useDispatch();
  const fetchFeeds = (petId) => dispatch(fetchFeedsByDays(petId))

  useEffect(() => {
    if (feedsByDays === undefined) {
      fetchFeeds(petId);
    }
  }, [])

  if (feedsByDays === undefined) {
    return (
      <div></div>
    );
  }

  return (
    <div className="calendar__wrapper">
      <div className="calendar">
        {feedsByDays.map((day) => <CalendarColumn day={day} key={day.name}/>)}
      </div>
    </div>
  );
};

export default Calendar;

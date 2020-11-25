import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFeedsByDays } from '../../../store/actions/petsActions';

const Calendar = ({ petId }) => {
  let feedsByDays = useSelector((state) => state.pets.feedsByDays);
  const dispatch = useDispatch();
  const fetchFeeds = (petId) => dispatch(fetchFeedsByDays(petId))

  useEffect(() => {
    if (feedsByDays[petId] === undefined) {
      fetchFeeds(petId);
    }
  }, [])

  return (
    <div>
      {petId}
    </div>
  );
};

export default Calendar;

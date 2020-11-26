import { sortFeedsByDaysOfWeek } from './sortFeedsByDaysOfWeek';
import { rotateArray } from './rotateArray';

it('sortFeedsByDaysOfWeek sorts in correct way', () => {
  const today = new Date();
  const feeds = [{ timestamp: today.valueOf(), amount: 1 }];
  let feedsByDaysCorrect = [
    { name: 'Вс', feeds: [] },
    { name: 'Пн', feeds: [] },
    { name: 'Вт', feeds: [] },
    { name: 'Ср', feeds: [] },
    { name: 'Чт', feeds: [] },
    { name: 'Пт', feeds: [] },
    { name: 'Сб', feeds: [] },
  ];
  feedsByDaysCorrect[today.getDay()].feeds = feeds;
  feedsByDaysCorrect = rotateArray(feedsByDaysCorrect, today.getDay() + 1);

  const feedsByDays = sortFeedsByDaysOfWeek(feeds);

  expect(feedsByDays).toEqual(feedsByDaysCorrect);
});

it('sortFeedsByDaysOfWeek excludes timestamps older than week', () => {
  const today = new Date();
  const moreThanWeekFromNow = new Date(today.getTime() - (8 * 24 * 60 * 60 * 1000));
  const feeds = [{ timestamp: moreThanWeekFromNow.valueOf(), amount: 1 }];

  let feedsByDaysCorrect = [
    { name: 'Вс', feeds: [] },
    { name: 'Пн', feeds: [] },
    { name: 'Вт', feeds: [] },
    { name: 'Ср', feeds: [] },
    { name: 'Чт', feeds: [] },
    { name: 'Пт', feeds: [] },
    { name: 'Сб', feeds: [] },
  ];
  feedsByDaysCorrect = rotateArray(feedsByDaysCorrect, today.getDay() + 1);

  const feedsByDays = sortFeedsByDaysOfWeek(feeds);

  expect(feedsByDays).toEqual(feedsByDaysCorrect);
});

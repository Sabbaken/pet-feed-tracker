import { rotateArray } from './rotateArray';

export const sortFeedsByDaysOfWeek = (feeds) => {
  let feedsByDays = [
    { name: 'Вс', feeds: [] },
    { name: 'Пн', feeds: [] },
    { name: 'Вт', feeds: [] },
    { name: 'Ср', feeds: [] },
    { name: 'Чт', feeds: [] },
    { name: 'Пт', feeds: [] },
    { name: 'Сб', feeds: [] },
  ];

  let today = new Date();
  let weekFromNow = new Date(today.getTime() - (7 * 24 * 60 * 60 * 1000));

  // feeds from past week by days of the week
  feeds.map((feed) => {
    feed.date = new Date(feed.timestamp);
    if (feed.date > weekFromNow) {
      feedsByDays[feed.date.getDay()].feeds.push(feed);
      return feed;
    }
  })

  feedsByDays = rotateArray(feedsByDays, today.getDay() + 1);
  return feedsByDays;
}

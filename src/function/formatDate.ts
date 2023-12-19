const formatDate = (dateData: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[dateData.getMonth()];
  const day = dateData.getDate();

  let hour = dateData.getHours();
  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;
  hour = hour ? hour : 12;
  const minute = dateData.getMinutes().toString().padStart(2, '0');

  return `${month} ${day}, ${hour}:${minute} ${amPm}`;
};

const formatTime = (dateData: Date) => {
  let hour = dateData.getHours();
  const amPm = hour >= 12 ? 'PM' : 'AM';

  hour = hour % 12;
  hour = hour ? hour : 12;
  const minute = dateData.getMinutes().toString().padStart(2, '0');

  return `${hour}:${minute} ${amPm}`;
};

const formatDay = (dateData: Date) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[dateData.getMonth()];
  const day = dateData.getDate();

  return `${month} ${day}`;
};

export { formatDate, formatTime, formatDay };

import moment from 'moment';

export function timestampToDate({ timestamp }) {
  if (!timestamp) {
    return 'null';
  }

  const formattedDate = moment(timestamp * 1000).format('DD MMM YYYY').toUpperCase();
  return formattedDate;
}

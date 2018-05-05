export const formatDateTime = (date, culture) => date.toLocaleString(culture, {
  day: 'numeric',
  month: 'numeric',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
});
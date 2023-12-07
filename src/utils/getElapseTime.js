function getElapseTime(createdAtString) {
  const createdAt = new Date(createdAtString);
  const currentTime = new Date();

  const elapsedMinutes = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60));
  const elapsedHour = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60 * 60));
  const elapsedDay = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24));
  const elapsedMonth = Math.floor((currentTime.getTime() - createdAt.getTime()) / (1000 * 60 * 60 * 24 * 30));

  if (elapsedMinutes < 2) {
    return '1 minute ago';
  }
  if (elapsedMinutes < 60) {
    return `${elapsedMinutes} minutes ago`;
  }
  if (elapsedHour < 24) {
    return `${elapsedHour} hours ago`;
  }
  if (elapsedDay < 30) {
    return `${elapsedDay} days ago`;
  }
  if (elapsedMonth < 12) {
    return `${elapsedMonth} months ago`;
  }
  const years = Math.floor(elapsedMonth / 12);
  return years === 1 ? '1 year ago' : `${years} years ago`;
}

export default getElapseTime;

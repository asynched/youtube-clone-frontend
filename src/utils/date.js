export const getDateDifference = date => {
  const days = new Date(Date.now()).getDate() - new Date(date).getDate()

  return days > 0 ? `${days} days` : `Today`
}

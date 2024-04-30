export const calculateDaysRemaining = (endDateString: string) => {
  const now = new Date();
  const endDate = new Date(endDateString);
  const timeDiff = endDate.getTime() - now.getTime();
  return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
};

function calculateDays(startDate, dueDate) {
  const start = new Date(startDate);
  const due = new Date(dueDate);
  const now = new Date();

  start.setHours(0, 0, 0, 0);
  due.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  const msPerDay = 24 * 60 * 60 * 1000; // Milliseconds per day

  // Difference in days between two dates
  const daysBetween = (date1, date2) => Math.ceil((date2 - date1) / msPerDay);

  if (now < start) {
    // Current date is less than start date
    const daysLeft = daysBetween(now, start);
    return `${daysLeft} days left`;
  } else if (now > due) {
    // Current date is greater than due date
    const daysOverdue = daysBetween(due, now);
    return `${daysOverdue} days overdue`;
  } else {
    // Current date is between start date and due date or equal to start or due date
    const daysRemaining = daysBetween(now, due);
    return `${daysRemaining} days remaining`;
  }
}

export default calculateDays;

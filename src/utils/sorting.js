export const sortTickets = (tickets, criterion) => {
    if (criterion === 'priority') {
      return [...tickets].sort((a, b) => b.priority - a.priority);
    }
    if (criterion === 'title') {
      return [...tickets].sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };
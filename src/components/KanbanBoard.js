import React from 'react';
import TicketCard from './TicketCard';
import Backlogicon from '../icons_FEtask/Backlog.svg'
import inprogressicon from '../icons_FEtask/in-progress.svg'
import todoicon    from '../icons_FEtask/To-do.svg'
import urgenticon from '../icons_FEtask/SVG - Urgent Priority grey.svg'
import highicon from '../icons_FEtask/Img - High Priority.svg'
import medicon from '../icons_FEtask/Img - Medium Priority.svg'
import lowicon from '../icons_FEtask/Img - Low Priority.svg'
import noicon from '../icons_FEtask/No-priority.svg'
import user from '../icons_FEtask/user.svg'
const KanbanBoard = ({ tickets, users, groupBy }) => {
  const groupedTickets = groupTickets(tickets, groupBy, users);

  // Function to select icon based on groupBy type
  const getIconForGroup = (groupType) => {
    switch (groupType) {
      case 'Backlog':
        return Backlogicon;
      case 'In progress':
        return inprogressicon;
      case 'Todo':
        return todoicon;
      case 'Urgent':
        return urgenticon
      case 'High':
        return highicon
      case 'Medium':
        return medicon
      case 'Low':
        return lowicon
      case 'No priority':
        return noicon
      default:
        return user;
    }
  };

  return (
    <div className="kanban-board">
      {Object.keys(groupedTickets).map(group => (
        <div key={group} className="kanban-column">
          <h2>
            <img src={getIconForGroup(group)} alt={`${groupBy} icon`} className="group-icon" />
            {group} <span className="group_num">({groupedTickets[group].length})</span>
          </h2>
          {groupedTickets[group].map(ticket => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              user={users.find(user => user.id === ticket.userId)} 
            />
          ))}
        </div>
      ))}
    </div>
  );
};

const groupTickets = (tickets, groupBy, users) => {
  return tickets.reduce((acc, ticket) => {
    let key = groupBy === 'user' 
      ? users.find(user => user.id === ticket.userId).name 
      : groupBy === 'priority' 
        ? ticket.priority 
        : ticket.status;

    const priorityLevels = ['Urgent', 'High', 'Medium', 'Low', 'No priority'];
    if (groupBy === 'priority') {
      key = priorityLevels[4 - key];
    }

    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
};

export default KanbanBoard;

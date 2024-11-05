import React from 'react';
import urgenticon from '../icons_FEtask/SVG - Urgent Priority colour.svg'
import highicon from '../icons_FEtask/Img - High Priority.svg'
import medicon from '../icons_FEtask/Img - Medium Priority.svg'
import lowicon from '../icons_FEtask/Img - Low Priority.svg'
import noicon from '../icons_FEtask/No-priority.svg'
import UserAvatar from './avatar';
const TicketCard = ({ ticket, user }) => {
  // Truncate the title to 50 characters and add ellipsis if it's longer
  const truncatedTitle = ticket.title.length > 50 
    ? `${ticket.title.substring(0, 50)}...` 
    : ticket.title;

  // Function to select an icon based on priority
  const getIconForPriority = (priority) => {
    switch (priority) {
      case 1:
        return lowicon;
      case 2:
        return medicon;
      case 3:
        return highicon;
      case 4:
        return urgenticon;
      default:
        return noicon;
    }
  };

  return (
    <div className="ticket-card">
      <div className='ticket_header'>
        <p >{ticket.id}</p>
        <UserAvatar userName={user.name} />
      </div>
      
      <p className='ticket_tit'>{truncatedTitle}</p>
      <div className='card_low'>
      <img src={getIconForPriority(ticket.priority)} alt="priority icon" className="priority-icon" />
      <div>
        <p> {ticket.tag[0]}</p>
      </div>
      </div>
      {/* Optionally display other details if needed */}
      {/* <p>Priority: {ticket.priority}</p> */}
      {/* <p>Status: {ticket.status}</p> */}
      {/* <p>Assigned to: {user ? user.name : 'Unknown'}</p> */}
    </div>
  );
};

export default TicketCard;

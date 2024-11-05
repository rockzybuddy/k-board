// UserAvatar.js
import React from 'react';
import PropTypes from 'prop-types';
import './avatar.css'; 
const getUserInitial = (userName) => userName.slice(0,2).toUpperCase();
const UserAvatar = ({ userName }) => {
  return (
    <div className="user-avatar">
      {getUserInitial(userName)}
    </div>
  );
};

UserAvatar.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserAvatar;

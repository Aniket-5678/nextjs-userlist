"use client";

// components/UserList.js
import React from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography } from '@mui/material';
import "../components/style/style.css";

const UserList = ({ users, onSelectUser }) => {
  return (
    <div className='userlist-container'>
        <div className='text'>
        <h2 >User</h2>
        </div>
            
      <List className='home-main' style={{ width: '100%', height: '100vh', overflowY: 'auto', backgroundColor: '#ffffff' }}>
        {users.map(user => (
          <ListItem className='list' button key={user.id} onClick={() => onSelectUser(user)}>
            <ListItemAvatar>
              <Avatar src={user.avatar} />
            </ListItemAvatar>
            <div className="list-item-text">
              <Typography variant="body1" style={{ color: 'black' }}>
                {`${user.profile.firstName} ${user.profile.lastName}`}
              </Typography>
              <Typography variant="body2" style={{ color: 'grey' }}>
                {user.jobTitle}
              </Typography>
              <Typography variant="body2" style={{ color: 'darkgrey' }}>
                {user.Bio}
              </Typography>
            </div>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;



"use client"

// components/UserDetails.js
import React from 'react';
import { Drawer, Card, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UserDetails = ({ user, onClose, open }) => {
  if (!user) return null;

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Card sx={{ width: 370 }}>
        <CardContent>
          <IconButton onClick={onClose} sx={{ float: 'right' }}>
            <CloseIcon />
          </IconButton>
          <Avatar src={user.avatar} sx={{ width: 100, height: 100, mb: 2 }} />
          <Typography variant="h5" sx={{ mb: 2 }}>{`${user.profile.firstName} ${user.profile.lastName}`}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>Email: {user.profile.email}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>userName: {user.profile.username}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>Job Title: {user.jobTitle}</Typography>
          <Typography variant="body2" sx={{ mb: 1 }}>Bio: {user.Bio}</Typography>
          {/* Add other fields as needed */}
        </CardContent>
      </Card>
    </Drawer>
  );
};

export default UserDetails;


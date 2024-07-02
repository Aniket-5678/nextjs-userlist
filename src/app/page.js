"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Grid, CircularProgress, Typography } from '@mui/material';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import "../app/components/style/style.css"

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [openUserDetails, setOpenUserDetails] = useState(false);

  useEffect(() => {
    axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users ')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setOpenUserDetails(true);
  };

  const handleCloseUserDetails = () => {
    setOpenUserDetails(false);
  };

  if (loading) {
    return (
      <Container  className="centered-container" >
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container  className="centered-container" >
        <Typography variant="h6">No data to show</Typography>
      </Container>
    );
  }


  return (
    <div className='home-container'>
   <Container className='home-container'>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <UserList users={users} onSelectUser={handleUserSelect} />
        </Grid>
        <Grid item xs={12} md={8}>
          <UserDetails user={selectedUser} onClose={handleCloseUserDetails} open={openUserDetails} />
        </Grid>
      </Grid>
    </Container>
    </div>

);
};



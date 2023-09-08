import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getProfileThunk, logOutThunk } from 'redux/auth-thunk';
import { useEffect } from 'react';
import { UserName } from './Header.styled';

export default function Header() {
  const { profile, token } = useSelector(state => state.auth);
  console.log(profile)
  console.log(token)
  const dispatch = useDispatch();

  const handleLogin = () => {};

  const handleLogOut = () => {
    dispatch(logOutThunk());
  };

  useEffect(() => {
    token && dispatch(getProfileThunk())
  }, [token, dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Phonebook
          </Typography>

          {profile && <UserName>{profile.name}</UserName>}

          <Link to="/" style={{ color: 'white' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/registretion" style={{ color: 'white' }}>
            <Button color="inherit">Sign Up</Button>
          </Link>
          <Link to="/login" style={{ color: 'white' }}>
            <Button
              onClick={profile ? handleLogOut : handleLogin}
              color="inherit"
            >
              {profile ? 'LogOut' : 'Login'}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

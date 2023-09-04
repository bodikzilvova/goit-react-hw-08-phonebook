import { Button } from '@mui/material';
import React from 'react';
import { ContainerPage, HomePageTitle, Greetings } from './HomePage.styled';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <ContainerPage>
      <HomePageTitle>Phonebook</HomePageTitle>
      <Greetings>
        Welcome to phonebook. <br />
        This is the place to keep all your contacts.
      </Greetings>
      <div style={{ marginTop: '100px' }}>
        <Link to="/login" style={{ color: 'white' }}>
          <Button variant="contained" href="#contained-buttons">
            Try it now!
          </Button>
        </Link>
      </div>
    </ContainerPage>
  );
}

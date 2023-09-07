import React from 'react';
import { LoginPageContainer, LoginPageTitle, Noreg } from './LoginPage.styled';
import LoginFormComponent from 'components/LoginFormComponent/LoginFormComponent';
import { Link } from 'react-router-dom';

export default function loginPage() {


  return (
    <LoginPageContainer>
      <LoginPageTitle>Login to Phonebook</LoginPageTitle>
      <LoginFormComponent />
      <Link to="/registretion" style={{ textDecoration: 'none' }}>
        <Noreg>Not registered yet?</Noreg>
      </Link>
    </LoginPageContainer>
  );
}

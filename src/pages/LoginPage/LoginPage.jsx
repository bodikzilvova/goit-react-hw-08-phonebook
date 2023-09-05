import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { LoginPageContainer, LoginPageTitle, LoginForm, EmailInput, PasswordInput, Noreg } from './LoginPage.styled';



export default function loginPage() {
  return (
    <LoginPageContainer>
    <LoginPageTitle>Login to Phonebook</LoginPageTitle>

    <LoginForm>
    <EmailInput type="email" name="email" placeholder="email"/>
    <PasswordInput type="password" name="password" placeholder="password"/>


<Link to='/registretion' style={{ textDecoration: 'none' }}>
  <Noreg>Do not have an account?</Noreg></Link>

  <Link to="/login" style={{ color: 'white' }}>
          <Button variant="contained" href="#contained-buttons">
            Login
          </Button>
        </Link>
</LoginForm>

</LoginPageContainer>
  )
}

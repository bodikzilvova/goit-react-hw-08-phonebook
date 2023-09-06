import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  LoginForm,
  EmailInput,
  PasswordInput,
  Noreg,
} from './LoginFormComponent.styled';

export default function LoginFormComponent() {
  return (
    <LoginForm>
      <EmailInput type="email" name="email" placeholder="email" />
      <PasswordInput type="password" name="password" placeholder="password" />

      <Link to="/registretion" style={{ textDecoration: 'none' }}>
        <Noreg>Not registered yet?</Noreg>
      </Link>

      <Link to="/phonebook" style={{ color: 'white' }}>
        <Button variant="contained" href="#contained-buttons">
          Login
        </Button>
      </Link>
    </LoginForm>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import {
  EmailInput,
  Noreg,
  PasswordInput,
  SignUpForm,
  UserNameInput,
} from './SignUpFormComponent.styled';
import { signUp } from 'redux/auth.service';

export default function SignUpFormComponent() {
  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted');

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    console.log(newUser);
    signUp(newUser)
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <UserNameInput type="text" name="name" placeholder="name" />
      <EmailInput type="email" name="email" placeholder="email" />
      <PasswordInput type="password" name="password" placeholder="password" />

      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Noreg>Already registered?</Noreg>
      </Link>

      <Button type="submit" variant="contained" href="#contained-buttons">
        Sign up
      </Button>
    </SignUpForm>
  );
}

import React from 'react';

import {
  EmailInput,
  PasswordInput,
  SignUpForm,
  UserNameInput,
  Noreg,
  Btn,
} from './SignUpFormComponent.styled';
import { signUp } from 'redux/auth.service';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUpFormComponent() {
  const navigate = useNavigate()
  const handleSubmit = e => {
    e.preventDefault();

    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    console.log(newUser);
    signUp(newUser)
      .then(res => {console.log('Success')
      navigate('/login')})
      .catch(error => console.log('error'));
  };

  return (
    <SignUpForm onSubmit={handleSubmit}>
      <UserNameInput type="text" name="name" placeholder="name" />
      <EmailInput type="email" name="email" placeholder="email" />
      <PasswordInput type="password" name="password" placeholder="password" />
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Noreg>Already registered?</Noreg>
      </Link>
      <Btn type="submit">Sign up</Btn>
    </SignUpForm>
  );
}

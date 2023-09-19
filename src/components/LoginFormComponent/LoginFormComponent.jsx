import React from 'react';
import Notiflix from 'notiflix';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginForm,
  EmailInput,
  PasswordInput,
  Noreg,
  Btn,
} from './LoginFormComponent.styled';

import { getProfileThunk, loginThunk } from 'redux/auth-thunk';
import { useDispatch } from 'react-redux';

export default function LoginFormComponent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getProfileThunk());
        navigate('/phonebook');
      })
      .catch(() => Notiflix.Notify.failure('Wrong password or mail'));
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <EmailInput type="email" name="email" placeholder="email" />
      <PasswordInput type="password" name="password" placeholder="password" />
      <Link to="/registretion" style={{ textDecoration: 'none' }}>
        <Noreg>Not registered yet?</Noreg>
      </Link>
      <Btn type="submit">Login</Btn>
    </LoginForm>
  );
}

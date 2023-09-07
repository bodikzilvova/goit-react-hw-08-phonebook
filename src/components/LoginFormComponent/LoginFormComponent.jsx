import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  LoginForm,
  EmailInput,
  PasswordInput,
  Noreg,
  Btn,
} from './LoginFormComponent.styled';

import { loginThunk } from 'redux/auth-thunk';
import { useDispatch, useSelector } from 'react-redux';

export default function LoginFormComponent() {
  const isAuth = useSelector((state) => state.auth.token);

  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/');
  }, [isAuth]);

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      loginThunk({
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <EmailInput type="email" name="email" placeholder="email" />
      <PasswordInput type="password" name="password" placeholder="password" />

      <Btn type="submit">Login</Btn>
    </LoginForm>
  );
}

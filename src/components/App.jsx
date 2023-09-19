import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/HomePage/HomePage';
import RegistreationPage from '../pages/RegistretionPage/RegistretionPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import { PhonebookPage } from 'pages/PhonebookPage/PhonebookPage';
import Layout from './Layout/Layout';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import PublicRoutes from './PublicRoutes/PublicRoutes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProfileThunk } from 'redux/auth/auth-thunk';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route
          path="registretion"
          element={
            <PublicRoutes>
              <RegistreationPage />
            </PublicRoutes>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoutes>
              <LoginPage />
            </PublicRoutes>
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoutes>
              <PhonebookPage />
            </PrivateRoutes>
          }
        ></Route>
      </Route>
    </Routes>
  );
};

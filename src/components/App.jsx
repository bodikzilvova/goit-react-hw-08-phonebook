
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/HomePage/HomePage'
import RegistreationPage from '../pages/RegistretionPage/RegistretionPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import { PhonebookPage } from 'pages/PhonebookPage/PhonebookPage';
import Layout from './Layout/Layout';

export const App = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="registretion" element={<RegistreationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="phonebook" element={<PhonebookPage />} ></Route>
        </Route>
      </Routes>
  );
};
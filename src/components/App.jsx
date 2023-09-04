
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/HomePage/HomePage'
import RegistreationPage from '../pages/RegistretionPage'
import LoginPage from '../pages/LoginPage'
import Layout from './Layout/Layout';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="registretion" element={<RegistreationPage />} />
        <Route path="login" element={<LoginPage />} />
        </Route>
      </Routes>
  );
};


// return (
//   <Container>
//     <Routes>
//       <Route></Route>
//       <Route></Route>
//       <Route></Route>
//       <Route></Route>
//     <h1>Phonebook</h1>
//     <ContactForm />
//     <section>
//       <h2>Contacts</h2>
//       <Filter />
//       <ContactList />
//     </section>
//     </Routes>
//   </Container>
// );
// };
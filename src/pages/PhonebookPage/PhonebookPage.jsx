import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { PhonebookContainer, PhonebookTitle } from './PhonebookPage.styled';

export const PhonebookPage = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <PhonebookContainer>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </section>
    </PhonebookContainer>
  );
};

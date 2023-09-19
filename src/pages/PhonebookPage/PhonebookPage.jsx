import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { PhonebookContainer, PhonebookTitle } from './PhonebookPage.styled';

export const PhonebookPage = () => {
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

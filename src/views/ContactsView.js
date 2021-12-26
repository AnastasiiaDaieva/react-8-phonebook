import Contacts from 'components/Contacts/Contacts';
import Form from 'components/Form';
import Filter from 'components/Filter/Filter';
import Container from 'components/Container/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'store/contacts/contacts-operations';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <Container>
      <Form />
      <Filter />
      <Contacts />
    </Container>
  );
}

export default ContactsView;

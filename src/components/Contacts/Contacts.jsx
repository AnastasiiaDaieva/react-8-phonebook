import React from 'react';
import { Section } from 'components/Section/Section';
import { ContactsItem } from './ContactsItem';
import s from 'components/Contacts/Contacts.module.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../../store/contacts/contacts-operations';
import { getVisibleContacts } from 'store/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

function Contacts({ contacts, onDeleteContact }) {
  const state = useSelector(state => state);
  const total = contacts.length;

  console.log(state);
  return (
    <Section className={s.Contacts} text="Contacts">
      <p className={s.Contacts__total}>
        {total > 1 || total === 0
          ? `Total: ${contacts.length} contacts`
          : `Total: ${contacts.length} contact`}{' '}
      </p>
      <ul className={s.Contacts__list}>
        {contacts.length === 0 ? (
          <h3 className={s.Contacts__message}>Nothing is here</h3>
        ) : (
          contacts.map(({ name, id, number }) => (
            <ContactsItem
              deleteFunc={() => onDeleteContact(id)}
              name={name}
              key={id}
              number={number}
            />
          ))
        )}
      </ul>
    </Section>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

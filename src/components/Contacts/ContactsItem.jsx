import React from 'react';
import s from 'components/Contacts/ContactsItem.module.scss';
import PropTypes from 'prop-types';
import { BsFillPencilFill } from 'react-icons/bs';

function ContactsItem({ id, name, number, deleteFunc }) {
  return (
    <li key={id} className={s.ContactsItem}>
      <span className={s.ContactsItem__text}>
        {name}: {number}
      </span>
      <button className={s.ContactsItem__edit}>
        <BsFillPencilFill />
      </button>
      <button
        type="button"
        className={s.ContactsItem__button}
        onClick={() => deleteFunc(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  deleteFunc: PropTypes.func.isRequired,
};

export { ContactsItem };

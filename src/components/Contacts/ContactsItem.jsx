import React from 'react';
import s from 'components/Contacts/ContactsItem.module.scss';
import PropTypes from 'prop-types';
import { BsFiles } from 'react-icons/bs';
import { useState, useRef } from 'react';

function ContactsItem({ id, name, number, deleteFunc }) {
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = useRef(null);

  const copyToClipboard = e => {
    textAreaRef.current.select();
    document.execCommand('copy');

    // e.target.focus();
    // setCopySuccess('Copied!');
    console.log(copySuccess);
  };

  return (
    <>
      <li key={id} className={s.ContactsItem}>
        <div className={s.ContactsItem__information}>
          <span className={s.ContactsItem__name}>{name}:</span>
          <span className={s.ContactsItem__number}>{number}</span>
          {/* <button className={s.ContactsItem__copy} onClick={copyToClipboard}>
            <BsFiles />
          </button> */}
        </div>
        <button
          type="button"
          className={s.ContactsItem__button}
          onClick={() => deleteFunc(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}

ContactsItem.propTypes = {
  id: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  deleteFunc: PropTypes.func.isRequired,
};

export { ContactsItem };

import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const deleteContact = createAction('contacts/delete');

export const changeFilter = createAction('contacts/changeFilter');

// -----------
// PLAIN REDUX
// -----------
// import { ADD, DELETE, CHANGE_FILTER } from './plain-redux-types';
// import { nanoid } from 'nanoid';

// export const addContact = ({ name, number }) => ({
//   type: ADD,
//   payload: {
//     id: nanoid(),
//     name,
//     number,
//   },
// });

// export const deleteContact = contactId => ({
//   type: DELETE,
//   payload: contactId,
// });
// export const changeFilter = value => ({ type: CHANGE_FILTER, payload: value });

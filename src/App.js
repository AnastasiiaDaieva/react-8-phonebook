import './App.css';
import React from 'react';
import Form from 'components/Form/Form';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Form />
      <Filter />
      <Contacts />
    </div>
  );
}

export default App;

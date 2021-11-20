import React from 'react';
import PropTypes from 'prop-types';

function Filter({ value, onChange }) {
  return (
    <label htmlFor="search">
      Find contacts by name
      <input id="search" type="text" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export { Filter };

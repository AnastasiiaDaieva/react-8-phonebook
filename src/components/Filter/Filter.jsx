import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from 'store/contacts/contacts-actions';
import { getFilter } from '../../store/contacts/contacts-selectors';
import s from './Filter.module.scss'

function Filter({ value, onChange }) {
  return (
    <label htmlFor="search">
      Find contacts by name
      <input id="search" type="text" value={value} onChange={onChange} className={s.Filter__input} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const mapStateToProps = state => ({ value: getFilter(state) });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

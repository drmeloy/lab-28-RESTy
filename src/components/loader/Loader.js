import React from 'react';
import PropTypes from 'prop-types';
import loader from '../../assets/loader.gif';
import styles from './Loading.css';

const Loader = ({ loading }) => {
  return loading && (
    <img className={styles.Loader} src={loader} alt='loader'></img>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool
};

export default Loader;

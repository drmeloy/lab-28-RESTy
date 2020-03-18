import React from 'react';
import PropTypes from 'prop-types';
import ResHeaders from './ResHeaders';
import ResResponse from './ResResponse';
import styles from './Response.css';

const Response = ({ responseBody }) => {
  return (
    <div className={styles.Response}>
      <ResHeaders />
      <ResResponse responseBody={responseBody} />
    </div>
  );
};

Response.propTypes = {
  responseBody: PropTypes.object
};

export default Response;

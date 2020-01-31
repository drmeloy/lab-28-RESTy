import React from 'react';
import PropTypes from 'prop-types';
import ResHeaders from './ResHeaders';
import ResResponse from './ResResponse';
import styles from './Response.css';

const Response = ({ headers, responseBody }) => {
  return (
    <div className={styles.Response}>
      <ResHeaders {...headers} />
      <ResResponse responseBody={responseBody} />
    </div>
  );
};

export default Response;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ method, headers, url, requestBody }) => {  
return (
    <div className={styles.HistoryItem}>
      <p className='method'>METHOD: {method}</p>
      <p className='url'>URL: {url}</p>
      <p className='request-body'>BODY: {requestBody}</p>
    </div>
)};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  headers: PropTypes.array,
  url: PropTypes.string.isRequired,
  requestBody: PropTypes.string
};

export default HistoryItem;

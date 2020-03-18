import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ method, url, requestBody, onClick }) => {  
  return (
    <div className={styles.HistoryItem} onClick={() => onClick(method, url, requestBody)}>
      <p className='method'>METHOD: {method}</p>
      <p className='url'>URL: {url}</p>
      {method !== 'GET' && method !== 'DELETE' && <p className='request-body'>BODY: {requestBody}</p>}
    </div>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  requestBody: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default HistoryItem;

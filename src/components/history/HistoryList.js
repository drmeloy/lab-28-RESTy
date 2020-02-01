import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './HistoryList.css';

const HistoryList = ({ historyList }) => {
  const historyItems = historyList.map(item => (    
    <li key={'hi'}>
      <HistoryItem method={item.method} headers={item.headers} url={item.url} requestBody={item.requestBody} />
    </li>
  ));

  return (
    <div className={styles.History}>
      <h1>History</h1>
      <ul>
        {historyItems}
      </ul>
    </div>
  );
}

HistoryList.propTypes = {
  HistoryList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    headers: PropTypes.string,
    url: PropTypes.string.isRequired,
    requestBody: PropTypes.string
  }))
}

export default HistoryList;

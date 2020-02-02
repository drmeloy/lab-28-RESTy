import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './HistoryList.css';

const HistoryList = ({ historyList }) => {
  const historyItems = historyList.map(item => (    
    <li key={Math.random() * 1000}>
      <HistoryItem {...item} />
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
    url: PropTypes.string.isRequired,
    requestBody: PropTypes.string
  }))
}

export default HistoryList;

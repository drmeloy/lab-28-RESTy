import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';
import styles from './HistoryList.css';

const HistoryList = ({ historyList, onClick }) => {
  const historyItems = historyList.map((item, i) => (    
    <li key={i}>
      <HistoryItem {...item} onClick={onClick} />
    </li>
  )).reverse();

  return (
    <div className={styles.History}>
      <h1>History</h1>
      <ul>
        {historyItems}
      </ul>
    </div>
  );
};

HistoryList.propTypes = {
  historyList: PropTypes.array,
  onClick: PropTypes.func.isRequired
};

export default HistoryList;

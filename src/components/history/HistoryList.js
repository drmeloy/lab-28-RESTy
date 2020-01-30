import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const HistoryList = ({ historyList }) => {
  const historyItems = historyList.map(item => {
    <li key={Math.random * 1000}>
      <HistoryItem {...item} />
    </li>
  });

  return (
    <>
      <h3>History</h3>
      <ul>
        {historyItems}
      </ul>
    </>
  );
}

HistoryList.propTypes = {
  HistoryList: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string.isRequired,
    headers: PropTypes.string,
    url: PropTypes.string.isRequired,
    requestBody: PropTypes.string
  })).isRequired
}
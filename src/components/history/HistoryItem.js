import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, headers, url, requestBody }) => (
    <div className='history-item'>
      <p className='method'>{method}</p>
      <p className='headers'>{headers}</p>
      <p className='url'>{url}</p>
      <p className='request-body'>{requestBody}</p>
    </div>
);

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  headers: PropTypes.string,
  url: PropTypes.string.isRequired,
  requestBody: PropTypes.string
};

export default HistoryItem;

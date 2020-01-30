import React from 'react';
import PropTypes from 'prop-types';
import ResHeaders from './ResHeaders';
import ResResponse from './ResResponse';

const Response = ({ headers, responseBody }) => {
  return (
    <div className='response-section'>
      <ResHeaders {...headers} />
      <ResResponse {...responseBody} />
    </div>
  );
};

Response.propTypes = {
  headers: PropTypes.shape({

  }).
};

export default Response;

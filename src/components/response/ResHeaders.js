import React from 'react';
import PropTypes from 'prop-types';

const ResHeaders = ({ headers }) => {
  return (
    <details>
      <summary>"Headers" : </summary>
      <p>{headers}</p>
    </details>
  );
};

ResHeaders.propTypes = {

};

export default ResHeaders;

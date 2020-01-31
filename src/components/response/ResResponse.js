import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const ResResponse = ({ responseBody }) => {
  console.log(responseBody);

  return (
    <details>
      <summary>"Response" : </summary>
      <ReactJson src={responseBody} />
    </details>
  );
}

ResResponse.propTypes = {

};

export default ResResponse;

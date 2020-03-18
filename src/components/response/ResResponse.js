import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const ResResponse = ({ responseBody }) => {
  return (
    <details open={Object.keys(responseBody).length !== 0}>
      <summary>&quot;Response&quot; :</summary>
      <ReactJson src={responseBody} theme="solarized" name={false} collapsed="2" displayDataTypes={false} iconStyle="circle" enableClipboard={false} />
    </details>
  );
};

ResResponse.propTypes = {
  responseBody: PropTypes.object
};

export default ResResponse;

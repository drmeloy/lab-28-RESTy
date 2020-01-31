import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Response.css';

const ResResponse = ({ responseBody }) => {
  console.log(responseBody);

  return (
    <details >
      <summary>"Response" : </summary>
      <ReactJson src={responseBody} theme="solarized" name={false} collapsed="2" displayDataTypes={false} iconStyle="circle" enableClipboard={false} />
    </details>
  );
}

ResResponse.propTypes = {

};

export default ResResponse;

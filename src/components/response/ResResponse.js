import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';
import styles from './Response.css';

const ResResponse = ({ responseBody }) => {
  let responseCounter = 0;
  if(responseBody){
    responseBody.forEach(item => {
    responseCounter++;
    });
  }

  return (
    <details>
      <summary>"Response" : <span>{responseCounter > 0 && responseCounter + ' items'}</span></summary>
      <ReactJson src={responseBody} theme="solarized" name={false} collapsed="2" displayDataTypes={false} iconStyle="circle" enableClipboard={false} />
    </details>
  );
}

ResResponse.propTypes = {
  responseBody: PropTypes.array
};

export default ResResponse;

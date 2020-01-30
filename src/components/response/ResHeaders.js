import React from 'react';
import PropTypes from 'prop-types';

const ResHeaders = ({ username, password, token }) => {
  return (
    <details>
      <summary>"Headers" : </summary>
      <p>Username: {username}</p>
      <p>Password: {password}</p>
      <p>Bearer Token: {token}</p>
    </details>
  );
};

ResHeaders.propTypes = {

};

export default ResHeaders;

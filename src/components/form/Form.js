import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, method, requestBody, username, password, token, onChange, onSubmit }) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div className={styles.url}>
        <input type='text' name='url' placeholder='URL' value={url} onChange={onChange}></input>
      </div>
      <div className={styles.methods}>
        <label>GET
          <input className='method-selector' type='radio' name='method' value='GET' checked={method === 'GET'} onChange={onChange}></input>
        </label>
        <label>POST
          <input className='method-selector' type='radio' name='method' value='POST' checked={method === 'POST'} onChange={onChange}></input>
        </label>
        <label>PUT
          <input className='method-selector' type='radio' name='method' value='PUT' checked={method === 'PUT'} onChange={onChange}></input>
        </label>
        <label>PATCH
          <input className='method-selector' type='radio' name='method' value='PATCH' checked={method === 'PATCH'} onChange={onChange}></input>
        </label>
        <label>DELETE
          <input className='method-selector' type='radio' name='method' value='DELETE' checked={method === 'DELETE'} onChange={onChange}></input>
        </label>
        <button className='form-submit' type='submit'>Go!</button>
      </div>
      <textarea className={styles.reqbody} placeholder='Raw JSON Body' name='requestBody' value={requestBody} onChange={onChange}></textarea>
      <div className={styles.auth}>
        <p>Basic Authorization</p>
        <input className='username' type='text' name='username' placeholder='Username' value={username} onChange={onChange}></input>
        <input className='password' type='password' name='password' placeholder='Password' value={password} onChange={onChange}></input>
        <p>Bearer Token</p>
        <input className='text' type='text' name='token' placeholder='Bearer Token' value={token} onChange={onChange}></input>
      </div>
    </form>
  );
};

Form.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  requestBody: PropTypes.string,
  username: PropTypes.string,
  password: PropTypes.string,
  token: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;

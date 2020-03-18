import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ url, method, requestBody, username, password, token, onChange, onSubmit, clearForm }) => {
  return (
    <form className={styles.Form} onSubmit={onSubmit}>
      <div className={styles.url}>
        <input required type='text' name='url' placeholder='URL' value={url} onChange={onChange}></input>
      </div>
      <div className={styles.methods}>
        <input className='method-selector' id={'GET'}type='radio' name='method' value='GET' checked={method === 'GET'} onChange={onChange}></input>
        <label htmlFor='GET'>GET</label>
        <input className='method-selector' id='POST' type='radio' name='method' value='POST' checked={method === 'POST'} onChange={onChange}></input>
        <label htmlFor='POST'>POST</label>
        <input className='method-selector' id='PUT' type='radio' name='method' value='PUT' checked={method === 'PUT'} onChange={onChange}></input>
        <label htmlFor='PUT'>PUT</label>
        <input className='method-selector' id='PATCH' type='radio' name='method' value='PATCH' checked={method === 'PATCH'} onChange={onChange}></input>
        <label htmlFor='PATCH'>PATCH</label>
        <input className='method-selector' id='DELETE' type='radio' name='method' value='DELETE' checked={method === 'DELETE'} onChange={onChange}></input>
        <label htmlFor='DELETE'>DELETE</label>
        <button className='form-submit' type='submit'>Go!</button>
        <button className='clear-button' type='reset' onClick={clearForm}>Clear All</button>
      </div>
      <textarea disabled={method === 'GET' || method === 'DELETE'} className={styles.reqbody} placeholder='Raw JSON Body' name='requestBody' value={requestBody} onChange={onChange}></textarea>
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

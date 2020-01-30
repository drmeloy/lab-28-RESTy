import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ url, method, requestBody, username, password, token, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input className='url-input' type='text' name='url' placeholder='URL' value={url} onChange={onChange} />
      </div>
      <div className='methods'>
        <input className='method-selector' type='radio' name='method' value='get' checked={method === 'get'} onChange={onChange}>GET</input>
        <input className='method-selector' type='radio' name='method' value='post' checked={method === 'post'} onChange={onChange}>POST</input>
        <input className='method-selector' type='radio' name='method' value='put' checked={method === 'put'} onChange={onChange}>PUT</input>
        <input className='method-selector' type='radio' name='method' value='patch' checked={method === 'patch'} onChange={onChange}>PATCH</input>
        <input className='method-selector' type='radio' name='method' value='delete' checked={method === 'delete'} onChange={onChange}>DELETE</input>
        <button className='form-submit' type='submit'>Go!</button>
      </div>
      <textarea placeholder='Raw JSON Body' name='requestBody' value={requestBody} onChange={onChange}></textarea>
      <div className='auth-section'>Basic Authorization
        <input className='username' type='text' name='username' placeholder='Username' value={username} onChange={onChange} />
        <input className='password' type='password' name='password' placeholder='Password' value={password} onChange={onChange} />
      </div>
      <div className='bearer-token'>Bearer Token
        <input className='text' type='text' name='token' placeholder='Bearer Token' value={token} onChange={onChange} />
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

import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HistoryList from '../components/history/HistoryList';
import Form from '../components/form/Form';
import Response from '../components/response/Response';
import styles from './RESTy.css';

export default class RESTy extends Component {
  state = {
    url: '',
    method: 'GET',
    requestBody: '',
    responseBody: {},
    historyList: [],
    token: '',
    username: '',
    password: ''
  }

  fetch = async() => {
    const { method, url, requestBody, token, username, password } = this.state;
    const options = {};

    options.method = method;

    if(method !== 'GET' && method !== 'DELETE'){
      options.headers = { 'Content-type': 'application/json; charset=UTF-8' };
      options.body = requestBody;
    }
    if(token !== ''){
      options.headers.Authorization = 'Bearer ' + token;
    }
    else if(username !== ''){
      options.headers.Authorization = 'Basic ' + username + ':' + password;
    }

    const response = await fetch(url, options);
    const data = await response.json();
    if(response.ok){
      this.setState({ responseBody: data });
    }
    else {
      throw data.error;
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { method, url, requestBody, historyList } = this.state;
    this.setState(() => ({ historyList: [...historyList, {
      method,
      url,
      requestBody
    }] }));

    this.fetch();
  }

  render(){
    const { historyList, url, method, requestBody, username, password, token, responseBody } = this.state;

    return (
      <div className={styles.RESTy}>
        <Header className={styles.Header}/>
        <HistoryList className={styles.History} historyList={historyList} />
        <Form className={styles.Form} url={url} method={method} requestBody={requestBody} username={username} password={password} token={token} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Response className={styles.Response} responseBody={responseBody} />
        <Footer className={styles.Footer}/>
      </div>  
    );
  }
}

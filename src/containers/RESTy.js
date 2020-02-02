import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HistoryList from '../components/history/HistoryList';
import Form from '../components/form/Form';
import Response from '../components/response/Response';
import Loader from '../components/loader/Loader';
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
    password: '',
    loading: false
  }

  fetch = async() => {
    this.setState({ loading: true });

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

    fetch(url, options)
      .then(res => res.json())
      .then(data => this.setState({ responseBody: data, loading: false }));
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

  historyClick = (method, url, requestBody) => {
    this.setState({ url, method, requestBody }, this.fetch);
  }

  clearForm = () => {
    this.setState({
      url: '',
      method: 'GET',
      requestBody: '',
      responseBody: {},
      historyList: [],
      token: '',
      username: '',
      password: '',
      loading: false
    });
  }

  render(){
    const { historyList, url, method, requestBody, username, password, token, responseBody, loading } = this.state;

    return (
      <div className={styles.RESTy}>
        <Loader loading={loading} />
        <Header className={styles.Header}/>
        <HistoryList className={styles.History} historyList={historyList} onClick={this.historyClick} />
        <Form className={styles.Form} url={url} method={method} requestBody={requestBody} username={username} password={password} token={token} onChange={this.handleChange} onSubmit={this.handleSubmit} clearForm={this.clearForm} />
        <Response className={styles.Response} responseBody={responseBody} />
        <Footer className={styles.Footer}/>
      </div>  
    );
  }
}

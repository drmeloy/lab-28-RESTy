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
    headers: [{
      'Content-Type': 'application/json'
    }],
    requestBody: '',
    responseBody: [],
    historyList: [],
    username: '',
    password: '',
    token: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = async() => {
    event.preventDefault();

    // const { method, headers, url, requestBody } = this.state;
    // this.setState({ historyList: [...historyList, {
    //   method,
    //   headers,
    //   url,
    //   requestBody
    // }] });

    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ responseBody: data.results })
      })
  }

  render(){
    const { historyList, url, method, requestBody, username, password, token, headers, responseBody } = this.state;

    return(
      <div className={styles.RESTy}>
        <Header className={styles.Header}/>
        <HistoryList className={styles.History} historyList={historyList} />
        <Form className={styles.Form} url={url} method={method} requestBody={requestBody} username={username} password={password} token={token} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Response className={styles.Response} headers={headers} responseBody={responseBody} />
        <Footer className={styles.Footer}/>
      </div>  
    );
  }
}
import React, { Component } from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import HistoryList from '../components/history/HistoryList';
import Form from '../components/form/Form';
import Response from '../components/response/Response';

export default class RESTy extends Component {
  state = {
    url: '',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
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

    const { method, headers, url, requestBody } = this.state;
    this.setState({ historyList: [...historyList, {
      method,
      headers,
      url,
      requestBody
    }] });

    fetch(this.state.url)
      .then(res => res.json())
      .then(data => {
        this.setState({ responseBody: data })
      })
  }

  render(){
    const { historyList, url, method, requestBody, username, password, token } = this.state;

    return(
      <>
        <Header />
        <HistoryList historyList={historyList} />
        <Form url={url} method={method} requestBody={requestBody} username={username} password={password} token={token} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <Response />
        <Footer />
      </>  
    );
  }
}
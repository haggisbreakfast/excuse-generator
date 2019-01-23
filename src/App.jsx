import React, { Component } from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components';
import { ExcuseInput } from './ExcuseInput';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
  }
`;

const Header = styled.h1`
  color: aqua;
  font-size: 60px;
  border-bottom: 1px aqua dotted;
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header> welcome to excuse generator </Header>
        <ExcuseInput />
      </div>
    );
  }
}

export default App;

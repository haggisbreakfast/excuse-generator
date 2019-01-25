import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { ExcuseInput } from './ExcuseInput';
import { Excuses } from './excuses';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
  body {
    font-family: 'Roboto Mono', monospace;
  }
`;

const Header = styled.p`
  color: aqua;
  font-size: 60px;
  border-bottom: 1px aqua dotted;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

type AppProps = {
  excuses: Excuses;
};

const App = (props: AppProps) => {
  const { excuses } = props;
  return (
    <div>
      <GlobalStyle />
      <Header>welcome to the excuse generator</Header>
      <MainContainer>
        <ExcuseInput />
      </MainContainer>
    </div>
  );
};

export default App;

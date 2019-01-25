import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  justify-content: center;
`;
const Input = styled.input``;

export class ExcuseInput extends Component {
  render() {
    return (
      <InputContainer>
        <Input />
      </InputContainer>
    );
  }
}

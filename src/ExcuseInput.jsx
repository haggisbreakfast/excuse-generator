import React, { Component } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div``;
export class ExcuseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      excuses: [],
    };
  }
  submitExcuse = (event) => {
    if (event.key === 'Enter') {
      console.log(event.target.value);
      this.setState({
        inputValue: event.target.value,
        excuses: event.target.value,
      });
      event.target.value = '';
    }
  };

  render() {
    return (
      <InputContainer>
        <input
          className="excuse-field"
          placeholder="type in the thing you don't wanna do and press Enter"
          onKeyPress={this.submitExcuse}
        />
      </InputContainer>
    );
  }
}

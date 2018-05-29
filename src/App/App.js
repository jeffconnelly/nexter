import React, { Component } from 'react';
import logo from '../logo.svg';
import styled from 'styled-components';
import './App.css';
import * as base from '../Shared/base';

const NewHeader = styled.h1`
  color: ${base.colorSecondary};
  font-family: ${base.FontSecondary};
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <NewHeader>This is some examples of font and color change!</NewHeader>
      </div>
    );
  }
}

export default App;

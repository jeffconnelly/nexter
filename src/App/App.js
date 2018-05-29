import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

import Sidebar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';
import Features from './Features';
import Story from './Story';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

// const NewHeader = styled.h1`
//   color: ${base.colorSecondary};
//   font-family: ${base.FontSecondary};
// `;

export default class App extends React.Component {
  render() {
    return (
      <section>
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <Story />
        <Homes />
        <Gallery />
        <Footer />
      </section>
    );
  }
}

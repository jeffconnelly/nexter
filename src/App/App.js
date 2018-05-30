import React from 'react';
import styled from 'styled-components';
// import * as base from '../Shared/base';

import Sidebar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';
import Features from './Features';
import StoryPictures from './StoryPictures';
import StoryContent from './StoryContent';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

// const NewHeader = styled.h1`
//   color: ${base.colorSecondary};
//   font-family: ${base.FontSecondary};
// `;

const Container = styled.section`
  display: grid;
  grid-template-rows: 80vh min-content 40vw repeat(3, min-content);
  grid-template-columns:
    [sidebar-start] 8rem [sidebar-end full-start] minmax(6rem, 1fr)
    1fr [center-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [center-end]
    minmax(6rem, 1fr) [full-end];
`;

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Sidebar />
        <Header />
        <Realtors />
        <Features />
        <StoryPictures />
        <StoryContent />
        <Homes />
        <Gallery />
        <Footer />
      </Container>
    );
  }
}

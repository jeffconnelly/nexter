import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const GalleryWrapper = styled.section`
  background-color: ${base.colorGreyDark1};
  grid-column: full-start / full-end;
`;

export default function Gallery() {
  return <GalleryWrapper>Gallery</GalleryWrapper>;
}

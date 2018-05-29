import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const StoryPictures = styled.div`
  background-color: ${base.colorPrimary};
  grid-column: full-start / col-end 4;
`;

export default function Story() {
  return <StoryPictures>Story pictures</StoryPictures>;
}

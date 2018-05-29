import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const StoryContent = styled.div`
  background-color: ${base.colorGreyLight1};
  grid-column: col-start 5 / full-end;
`;

export default function Story() {
  return <StoryContent>Story content</StoryContent>;
}

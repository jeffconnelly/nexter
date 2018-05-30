import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const StoryContent = styled.div`
  background-color: ${base.colorGreyLight1};
  grid-column: col-start 5 / full-end;
`;

const Header3 = styled(base.heading3)``;

const Header2 = styled(base.heading2)``;
export default function Story() {
  return (
    <StoryContent>
      <Header3>Happy Customers</Header3>
      <Header2>The best decision</Header2>
    </StoryContent>
  );
}

import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const StoryContent = styled.div`
  background-color: ${base.colorGreyLight1};
  grid-column: col-start 5 / full-end;

  padding: 6rem 8vw;
  ${'' /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; */}

  display: grid;
  align-content: center;
  justify-items: start;
`;

const Header3 = styled(base.heading3)`
margin-bottom: ${base.Mbsm}
`;

const Header2 = styled(base.heading2)`
color: ${base.colorGreyDark1};
margin-bottom: ${base.Mbmd}
`;

const Btn = styled(base.btn)`
`;

const StoryText = styled.p`
font-size: 1.5rem;
font-style: italic;
margin-bottom: 4rem;
`;

export default function Story() {
  return (
    <StoryContent>
      <Header3>Happy Customers</Header3>
      <Header2>&ldquo;The best decision of our lives&rdquo;</Header2>
      <StoryText>
        Lorem, ipsum dolor sit amet consectetur adipiscing elit. Tenetur
        distinctio necessitatibus pariatur voluptatibus. Quidem consequatur
        harum volupta!
      </StoryText>
      <Btn className="btn">Find your own home</Btn>
    </StoryContent>
  );
}

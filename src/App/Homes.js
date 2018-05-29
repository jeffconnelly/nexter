import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const HomesWrapper = styled.section`
  background-color: ${base.colorSecondary};
  grid-column: center-start / center-end;
`;

export default function Homes() {
  return <HomesWrapper>Homes</HomesWrapper>;
}

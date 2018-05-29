import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const RealtorsWrapper = styled.div`
  background-color: ${base.colorSecondary};
  grid-column: col-start 7 / full-end;
`;

export default function Realtors() {
  return <RealtorsWrapper>Top 3 realtors</RealtorsWrapper>;
}

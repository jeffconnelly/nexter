import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const HeaderWrapper = styled.header`
  background-color: ${base.colorGreyDark1};
  grid-column: full-start / col-end 6;
`;

export default function Header() {
  return <HeaderWrapper>Header</HeaderWrapper>;
}

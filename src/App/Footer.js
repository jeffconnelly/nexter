import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const FooterWrapper = styled.footer`
  background-color: ${base.colorSecondary};
  grid-column: full-start / full-end;
`;

export default function Footer() {
  return <FooterWrapper>Footer</FooterWrapper>;
}

import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const FeaturesWrapper = styled.section`
  background-color: ${base.colorGreyLight2};
  grid-column: center-start / center-end;
`;

export default function Features() {
  return <FeaturesWrapper>Features</FeaturesWrapper>;
}

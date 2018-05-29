import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const SideBarWrapper = styled.div`
  background-color: ${base.colorPrimary};
  grid-column: sidebar-start / sidebar-end;
  grid-row: 1 / -1;
`;

export default function SideBar() {
  return <SideBarWrapper>Sidebar</SideBarWrapper>;
}

import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const StoryPictures = styled.div`
  background-color: ${base.colorPrimary};
  grid-column: full-start / col-end 4;
  background-image: linear-gradient(rgba(198,153,99, .5), rgba(198,153,99, .5)), url(../Img/back.jpg);

  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
`;

const StoryImg1 = styled.img`
width: 100%;
grid-row: 2 / 6;
grid-column: 2 / 6;
box-shadow: 0 2rem 5rem rgba(0, 0, 0, .1);
`;

const StoryImg2 = styled.img`
width: 115%;
grid-row: 4 / 6;
grid-column: 4 / 7;
z-index: 20;
box-shadow: 0 2rem 5rem rgba(0, 0, 0, .2);
`;

export default function Story() {
  return <StoryPictures>
    <StoryImg1 src='../Img/story-1.jpeg' alt="Couple with new house"/>
    <StoryImg2 src='../Img/story-2.jpeg' alt="New House"/>
  </StoryPictures>;
}

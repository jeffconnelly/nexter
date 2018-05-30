import React from 'react';
import styled from 'styled-components';
import * as base from '../Shared/base';

const FeaturesWrapper = styled.section`
  /*Grid item feature */
  grid-column: center-start / center-end;
  margin: 15rem 0;

  /*Also is a grid container */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 6rem;
  align-items: start;
`;

const Feature = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2.5rem;
`;

const FeatureIcon = styled.svg`
  fill: ${base.colorPrimary};
  width: 4.5rem;
  height: 4.5rem;
  grid-row: 1 / span 2;
  transform: translateY(-1rem);
`;

const Header4 = styled(base.heading4)`
  color: ${base.colorGreyDark1};
`;

const FeatureText = styled.p`
  font-size: 1.7rem;
`;

export default class App extends React.Component {
  render() {
    return (
      <FeaturesWrapper>
        <Feature>
          <FeatureIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + './Img/sprite.svg#icon-global'
              }
            />
          </FeatureIcon>
          <Header4>World's best luxury homes</Header4>
          <FeatureText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + './Img/sprite.svg#icon-trophy'
              }
            />
          </FeatureIcon>
          <Header4>Only the best properties</Header4>
          <FeatureText>
            Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus
            rerum sed a eligendi aut quia.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + './Img/sprite.svg#icon-map-pin'
              }
            />
          </FeatureIcon>
          <Header4>All homes in top locations</Header4>
          <FeatureText>
            Tenetur distinctio necessitatibus pariatur voluptatibus quidem
            consequatur harum.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <use
              xlinkHref={process.env.PUBLIC_URL + './Img/sprite.svg#icon-key'}
            />
          </FeatureIcon>
          <Header4>New Home in One Week</Header4>
          <FeatureText>
            Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor
            sit amet consectetur adipisicing elit.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <use
              xlinkHref={
                process.env.PUBLIC_URL + './Img/sprite.svg#icon-presentation'
              }
            />
          </FeatureIcon>
          <Header4>Top 1% Realtors</Header4>
          <FeatureText>
            Quidem consequatur harum, voluptatum mollitia quae. Tenetur
            distinctio necessitatibus pariatur voluptatibus.
          </FeatureText>
        </Feature>
        <Feature>
          <FeatureIcon>
            <use
              xlinkHref={process.env.PUBLIC_URL + './Img/sprite.svg#icon-lock'}
            />
          </FeatureIcon>
          <Header4>Secure payments on Nexter</Header4>
          <FeatureText>
            Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia
            quae.
          </FeatureText>
        </Feature>
      </FeaturesWrapper>
    );
  }
}

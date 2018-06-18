import styled from 'styled-components';

// COLOR VARIABLES
export const colorPrimary = '#c69963';
export const colorPrimaryDark = '#B28451';

export const colorSecondary = '#101d2c';

export const colorGreyLight1 = '#f9f7f6';
export const colorGreyLight2 = '#aaa';
export const colorGreyDark1 = '#54483A';
export const colorGreyDark2 = '#6D5D4B';

// FONT VARIABLES
export const FontPrimary = 'Nunito, sans-serif';
export const FontDisplay = 'Josefin Sans, sans-serif';
export const FontSecondary = 'Lato, sans-serif';

// TYPOGRAPHY
export const heading1 = styled.h1`
  font-family: ${FontSecondary};
  font-weight: 400;
`;
export const heading2 = styled.h2`
  font-family: ${FontDisplay};
  font-weight: 400;
  font-size: 4rem;
  line-height: 1;
  font-style: italic;
`;

export const heading3 = styled.h3`
  font-family: ${FontDisplay};
  font-weight: 400;
  font-size: 1.6rem;
  color: ${colorPrimary};
  text-transform: uppercase;
`;
export const heading4 = styled.h4`
  font-family: ${FontSecondary};
  font-weight: 400;
  font-size: 1.9rem;

  /* && light will be color: colorGreyLight1 */
`;

//Buttons
export const btn = styled.button`
  background-color: ${colorPrimary};
  color: #fff;
  border: none;
  border-radius: 0;
  font-family: ${FontDisplay};
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 1.8rem 3rem;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: ${colorPrimaryDark}
  }
`;

//Margin classes
export const Mbsm = '2rem';
export const Mbmd = '3rem'; 
export const Mblg = '4rem'; 
export const Mbhg = '8rem'; 
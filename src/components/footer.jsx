import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: block;
`;

const Footer = () => (
  <StyledFooter>
      ©
    {' '}
    {new Date().getFullYear()}
, Built with
    {' '}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </StyledFooter>
);

export default Footer;

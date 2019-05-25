import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const StyledLayoutWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  padding: 1.5rem 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

const Layout = (props) => {
  const { location, title, children } = props;
  return (
    <StyledLayoutWrapper>
      <Header location={location} title={title} />
      <main>{children}</main>
      <Footer />
    </StyledLayoutWrapper>
  );
};

export default Layout;

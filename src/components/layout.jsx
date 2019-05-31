import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './header';
import Footer from './footer';

const StyledContainerWrapper = styled.div`
  height: 100%
  width: 100%;

  & > * {
    padding: 0.75rem calc(5% + 0.75rem);
  }
`;

const Layout = (props) => {
  const { location, title, children } = props;
  return (
    <StyledContainerWrapper>
      <Header location={location} title={title} />
      <main>
        {children}
      </main>
      <Footer />
    </StyledContainerWrapper>
  );
};

Layout.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

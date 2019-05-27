import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';

const StyledHeaderWrapper = styled.header`
  display: block;
  width: 100%;
  padding: 0.75rem calc(5% + 0.75rem);
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid lightgrey;
`;

const StyledContentWrapper = styled.main`
  display: block;
  width: 90%;
  padding: 1.5rem 0.75rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledFooterWrapper = styled.footer`
  display: block;
  width: 100%;
  padding: 0.75rem calc(5% + 0.75rem);
  margin-left: auto;
  margin-right: auto;
`;

const Layout = (props) => {
  const { location, title, children } = props;
  return (
    <div>
      <StyledHeaderWrapper>
        <Header location={location} title={title} />
      </StyledHeaderWrapper>
      <StyledContentWrapper>
        {children}
      </StyledContentWrapper>
      <StyledFooterWrapper>
        <Footer />
      </StyledFooterWrapper>
    </div>
  );
};

Layout.propTypes = {
  location: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

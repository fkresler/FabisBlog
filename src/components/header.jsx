import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ToggleOpenCloseButton from './toggle-open-close-button';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const MainTitle = styled.h1`
  font-size: 150%;
  font-family: Montserrat, sans-serif;
`;

const StyledRightHeaderContent = styled.div`
  margin-left;
  display: flex;
`;

const ResponsiveMenuToggle = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
    };
    this.handleToggleHeaderOpenCloseClick = this.handleToggleHeaderOpenCloseClick.bind(this);
  }

  handleToggleHeaderOpenCloseClick() {
    this.setState(prevState => ({
      isOpened: !prevState.isOpened,
    }));
  }

  render() {
    const { title } = this.props;
    const { isOpened } = this.state;
    return (
      <StyledHeader>
        <MainTitle>
          <Link to="/">
            {title}
          </Link>
        </MainTitle>
        <StyledRightHeaderContent>
          <ResponsiveMenuToggle>
            <ToggleOpenCloseButton isOpened={isOpened} onToggle={this.handleToggleHeaderOpenCloseClick} />
          </ResponsiveMenuToggle>
        </StyledRightHeaderContent>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import ToggleOpenCloseButton from './toggle-open-close-button';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  max-height: ${props => (props.isFullScreen ? '100vh' : '5rem')};
  position: ${props => (props.isFullScreen ? 'fixed' : 'static')};
  background-color: #ffffff;
  z-index: 10;
`;

const StyledHeaderTitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const StyledHeaderMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > * {
    width: 100%;
    padding: 1rem;
    text-align: center;
    border-bottom: 1px solid lightgrey;
  }
`;

const MainTitle = styled.div`
  font-size: 150%;
  font-family: Montserrat, sans-serif;
  font-weight: bold;
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
      <StyledHeader isFullScreen={isOpened}>
        <StyledHeaderTitleBar>
          <MainTitle>
            <Link to="/">
              {title}
            </Link>
          </MainTitle>
          <StyledRightHeaderContent>
            <ResponsiveMenuToggle>
              <ToggleOpenCloseButton
                isOpened={isOpened}
                onToggle={this.handleToggleHeaderOpenCloseClick}
              />
            </ResponsiveMenuToggle>
          </StyledRightHeaderContent>
        </StyledHeaderTitleBar>
        <StyledHeaderMenuContent>
          <div>First</div>
          <div>Second</div>
          <div>Third</div>
        </StyledHeaderMenuContent>
      </StyledHeader>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

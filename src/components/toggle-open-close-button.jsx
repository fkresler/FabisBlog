import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const StyledOpenCloseSVGIcon = styled.svg`
  display: block;
  height: 20px;
  width: 20px;
  color: darkgrey;
  cursor: pointer;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate ? 'rotate(180deg)' : '')};
`;

const ToggleOpenCloseButton = (props) => {
  const { isOpened, onToggle } = props;
  return (
    <StyledOpenCloseSVGIcon rotate={isOpened ? 1 : 0} viewBox="0 0 18 18" role="presentation" ariaHidden="true" focusable="false" onClick={onToggle}>
      <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" fillRule="evenodd" />
    </StyledOpenCloseSVGIcon>
  );
};

ToggleOpenCloseButton.propTypes = {
  isOpened: PropTypes.bool,
  onToggle: PropTypes.func,
};

ToggleOpenCloseButton.defaultProps = {
  isOpened: false,
  onToggle: () => {},
};

export default ToggleOpenCloseButton;

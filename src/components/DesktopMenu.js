import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDesktopMenu = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const DesktopMenu = ({ download }) => (
  <StyledDesktopMenu>
    <a href={download} target="_blank" rel="noopener noreferrer">
      Download the Full Study
    </a>
  </StyledDesktopMenu>
);

DesktopMenu.propTypes = {
  download: PropTypes.string.isRequired,
};

export default DesktopMenu;

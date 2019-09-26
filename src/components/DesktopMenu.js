import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDesktopMenu = styled.div`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const DesktopMenu = props => <StyledDesktopMenu>stuff</StyledDesktopMenu>;

DesktopMenu.propTypes = {};

export default DesktopMenu;

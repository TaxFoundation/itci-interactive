import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { kebabCase } from 'lodash';

import useIndexRankings from '../data/useIndexRankings';
import Divider from './Divider';

const StyledMobileMenu = styled.div`
  background-color: ${props => props.theme.white};
  bottom: 0;
  left: 0;
  min-height: 100vh;
  position: fixed;
  right: 0;
  overflow-y: scroll;
  padding: 1rem;
  transform: ${props => (props.active ? 'none' : `translateX(100%)`)};
  transition: transform 0.2s ease-in-out;
  top: 0;
  width: 100vw;
  z-index: 10;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  font-size: 1.4rem;
  margin: 0.25rem;
  padding: 0.25rem;
  text-decoration: none;
`;

const StyledCloseButton = styled.button`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.color};
  border-radius: 4px;
  color: ${props => props.theme.color};
  float: right;
  font-size: 1rem;
  padding: 0.5rem;
`;

const Download = styled.a`
  background-color: ${props => props.theme.orange};
  border: 1px solid ${props => props.theme.orange};
  border-radius: 4px;
  color: ${props => props.theme.white};
  display: block;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
`;

const MobileMenu = ({ active, close }) => {
  const countries = useIndexRankings();
  return (
    <StyledMobileMenu active={active}>
      <StyledCloseButton onClick={close}>Close Menu</StyledCloseButton>
      <ul>
        {countries.map(country => (
          <li>
            <StyledLink
              key={`menu-link-${country.ISO_3}`}
              to={`/${kebabCase(country.country)}`}
            >
              {country.country}
            </StyledLink>
          </li>
        ))}
      </ul>
      <Divider></Divider>
      <Download
        href="https://taxfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the Full Study
      </Download>
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  active: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};

export default MobileMenu;

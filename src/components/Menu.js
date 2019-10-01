import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { kebabCase } from 'lodash';

import useIndexRankings from '../data/useIndexRankings';
import Divider from './Divider';
import { BlackButton, OrangeButton } from './Button';

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const BG = styled.div`
  animation: ${FadeIn} 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  display: ${props => (props.active ? 'block' : 'none')};
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  z-index: 5;
`;

const StyledMenu = styled.div`
  background-color: ${props => props.theme.white};
  bottom: 0;
  box-shadow: ${props =>
    props.active ? `-2px 0 10px 1px ${props.theme.color}` : 'none'};
  min-height: 100vh;
  position: fixed;
  right: 0;
  overflow-y: scroll;
  padding: 1rem;
  transform: ${props => (props.active ? 'none' : `translateX(100%)`)};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  top: 0;
  width: 330px;
  z-index: 10;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
  font-size: 1.4rem;
  margin: 0.25rem;
  padding: 0.25rem;
  text-decoration: none;
`;

const Menu = ({ active, close, download }) => {
  const countries = useIndexRankings();
  return (
    <>
      <BG active={active} onClick={close}></BG>
      <StyledMenu active={active}>
        <BlackButton onClick={close}>Close Menu</BlackButton>
        <OrangeButton as={Link} to="/subscribe">
          Subscribe
        </OrangeButton>
        <ul>
          {countries.map(country => (
            <li key={`menu-link-${country.ISO_3}`}>
              <StyledLink to={`/${kebabCase(country.country)}`}>
                {country.country}
              </StyledLink>
            </li>
          ))}
        </ul>
        <Divider></Divider>
        <OrangeButton
          as="a"
          href={download}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download the Full Study
        </OrangeButton>
      </StyledMenu>
    </>
  );
};

Menu.propTypes = {
  active: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  download: PropTypes.string.isRequired,
};

export default Menu;

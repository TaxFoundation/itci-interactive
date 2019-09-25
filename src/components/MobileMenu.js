import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { kebabCase } from 'lodash';

import useIndexRankings from '../data/useIndexRankings';

const StyledMobileMenu = styled.div`
  background-color: ${props => props.theme.white};
  bottom: 0;
  left: 0;
  min-height: 100vh;
  position: fixed;
  right: 0;
  transform: translateX(${props => (props.active ? 0 : '100%')});
  top: 0;
  width: 100vw;
  z-index: ${props => (props.active ? 10 : -1)};

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.color};
`;

const MobileMenu = ({ active }) => {
  const countries = useIndexRankings();
  return (
    <StyledMobileMenu active={active}>
      <ul>
        {countries.map(country => (
          <li>
            <StyledLink to={`/${kebabCase(country.country)}`}>
              {country.country}
            </StyledLink>
          </li>
        ))}
      </ul>
    </StyledMobileMenu>
  );
};

MobileMenu.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default MobileMenu;

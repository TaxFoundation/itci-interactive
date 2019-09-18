import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Theme from '../Theme';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  padding: 1rem;

  h1,
  a,
  a:active,
  a:hover,
  a:focus,
  a:visited {
    color: ${props => props.theme.white};
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-family: ${props => props.theme.fontFamilies.oswald};
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
  }
`;

const HeaderContents = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  margin: 0 auto;
  width: 960px;
`;

const HeaderNavigation = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / auto;
`;

const Header = ({ year, siteTitle }) => (
  <StyledHeader>
    <HeaderContents>
      <div>
        <a
          href="https://taxfoundation.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo fill={Theme.white}></Logo>
        </a>
        <h1>
          <Link to="/">
            <span style={{ fontWeight: 300 }}>{year}</span> {siteTitle}
          </Link>
        </h1>
      </div>
      <HeaderNavigation>
        <div>stuff</div>
        <div>things</div>
      </HeaderNavigation>
    </HeaderContents>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  year: PropTypes.number,
};

export default Header;

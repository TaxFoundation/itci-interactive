import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Theme from '../Theme';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  display: grid;
  grid-gap: 1rem;
  grid-template: repeat(2, auto) / repeat(2, minmax(auto, 480px));
  grid-template-areas:
    'title sharing'
    'title nav';
  justify-content: center;
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
    font-size: calc(1rem + 2vw);
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;
  }
`;

const HeaderContents = styled.div`
  grid-area: title;
`;

const HeaderSharing = styled.div`
  align-items: end;
  display: grid;
  grid-area: sharing;
  justify-items: end;
`;

const HeaderNavigation = styled.nav`
  align-items: end;
  display: grid;
  grid-area: nav;
  justify-items: end;
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
    </HeaderContents>
    <HeaderSharing>Subscribe</HeaderSharing>
    <HeaderNavigation>Download Full Study</HeaderNavigation>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  year: PropTypes.number,
};

export default Header;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Theme from '../Theme';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  padding: 1rem;

  @media screen and (min-width: 700px) {
    display: grid;
    grid-gap: 1rem;
    justify-content: center;
    grid-template: repeat(2, auto) / repeat(2, minmax(auto, 480px));
    grid-template-areas:
      'title sharing'
      'title nav';
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: ${props => props.theme.white};
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
  text-transform: uppercase;
`;

const Header = ({ year, siteTitle }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
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
      <HeaderNavigation>
        <div onClick={() => setMobileMenu(true)}>Menu</div>
        <MobileMenu
          active={mobileMenu}
          close={() => setMobileMenu(false)}
        ></MobileMenu>
      </HeaderNavigation>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  year: PropTypes.number,
};

export default Header;

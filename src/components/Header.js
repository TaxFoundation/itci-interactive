import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Theme from '../Theme';
import Logo from './Logo';
import Menu from './Menu';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
`;

const StyledHeaderContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: center;
  grid-template: auto / 1fr;
  grid-template-areas: 'title nav';
  margin: 0 auto;
  max-width: 960px;
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
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.fontFamilies.oswald};
    font-size: calc(1rem + 2vw);
    font-weight: 400;
    line-height: 1.1;
    text-transform: uppercase;

    @media screen and (min-width: 960px) {
      font-size: 2.4rem;
    }
  }
`;

const HeaderContents = styled.div`
  grid-area: title;
`;

const HeaderNavigation = styled.nav`
  align-items: end;
  display: grid;
  grid-area: nav;
  justify-items: end;
  text-transform: uppercase;
`;

const MenuToggle = styled.button`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.white};
  border-radius: 4px;
  color: ${props => props.theme.orange};
  font-size: 1rem;
  padding: 0.5rem;
`;

const Header = ({ year, siteTitle, download }) => {
  const [menu, setMenu] = useState(false);
  return (
    <StyledHeader>
      <StyledHeaderContainer>
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
        <HeaderNavigation>
          <MenuToggle onClick={() => setMenu(true)}>Menu</MenuToggle>
        </HeaderNavigation>
      </StyledHeaderContainer>
      <Menu
        active={menu}
        close={() => setMenu(false)}
        download={download}
      ></Menu>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
  year: PropTypes.number,
  download: PropTypes.string,
};

export default Header;

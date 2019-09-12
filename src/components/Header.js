import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${props => props.theme.orange};
  color: ${props => props.theme.white};
  height: 100px;

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
`;

const HeaderContents = styled.div`
  display: grid;
  margin: 0 auto;
  width: 960px;
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <HeaderContents>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </HeaderContents>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;

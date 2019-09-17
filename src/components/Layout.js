/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './Header';
import Main from './Main';
import Theme from '../Theme';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: ${props => props.theme.fontFamilies.lato};
    font-size: ${props => props.theme.fontSize};
    font-weight: ${props => props.theme.fontWeight};
    height: 100%;
    line-height: 1.6;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            year
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={Theme}>
        <>
          <Reset />
          <GlobalStyle />
          <Header
            year={data.site.siteMetadata.year}
            siteTitle={data.site.siteMetadata.title}
          />
          <Main>{children}</Main>
          <footer></footer>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
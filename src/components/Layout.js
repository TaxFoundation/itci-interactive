import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
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

const StyledLayout = styled.div`
  display: grid;
  grid-template: auto 1fr auto / auto;
  min-height: 100vh;
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
          <StyledLayout>
            <Header
              year={data.site.siteMetadata.year}
              siteTitle={data.site.siteMetadata.title}
            />
            <Main>{children}</Main>
            <Footer />
          </StyledLayout>
        </>
      </ThemeProvider>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

import React from 'react';
import PropTypes from 'prop-types';
import { Link, StaticQuery, graphql } from 'gatsby';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopIn from './PopIn';
import Theme from '../Theme';
import { OrangeButton } from './Button';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    font-family: ${props => props.theme.fontFamilies.lato};
    font-size: ${props => props.theme.fontSize};
    font-weight: ${props => props.theme.fontWeight};
    line-height: 1.6;
  }

  em {
    font-style: italic;
  }
`;

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const PopInContent = ({ dismiss }) => (
  <div>
    <p style={{ textAlign: 'center' }}>
      Get email updates about global tax policy from the Tax Foundation.
    </p>
    <OrangeButton
      style={{ maxWidth: '480px', margin: '0.5rem auto' }}
      as={Link}
      to="/subscribe"
      onClick={dismiss}
    >
      Subscribe today!
    </OrangeButton>
  </div>
);

PopInContent.propTypes = {
  dismiss: PropTypes.func,
};

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            year
            download
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
              download={data.site.siteMetadata.download}
            />
            <Main>{children}</Main>
            <Footer year={data.site.siteMetadata.year} />
            <PopIn>
              <PopInContent></PopInContent>
            </PopIn>
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

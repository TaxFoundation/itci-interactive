import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Logo from './Logo';
import Theme from '../Theme';

const StyledFooter = styled.footer`
  background-color: #eee;
  margin-top: 1rem;
`;

const FooterContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 480px));
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 1rem;

  a {
    color: ${props => props.theme.tfBlue};
    text-decoration: none;
  }
`;

const FooterBottom = styled.div`
  background-color: #bbb;
  font-size: 0.8rem;
  padding: 0.5rem;
  text-align: center;

  a {
    color: ${props => props.theme.color};
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  li {
    display: inline-block;
    padding-right: 0.5rem;

    &::after {
      content: '|';
      margin-left: 0.5rem;
    }

    &:last-child::after {
      content: '';
      margin: 0;
    }
  }
`;

const Footer = ({ year }) => (
  <StyledFooter>
    <FooterContents>
      <div>
        <a
          style={{ display: 'block' }}
          href="https://taxfoundation.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo fill={Theme.tfBlue}></Logo>
        </a>
        <p>
          1325 G St NW
          <br />
          Suite 950
          <br />
          Washington, DC 20005
          <br />
          202-464-6200
        </p>
      </div>
      <div>
        <p>
          The{' '}
          <a
            href="https://taxfoundation.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tax Foundation
          </a>{' '}
          is the nation’s leading independent tax policy research organization.
          Since 1937, our principled research, insightful analysis, and engaged
          experts have informed smarter tax policy at the federal, state, and
          local levels. We improve lives through tax policy research and
          education that leads to greater economic growth and opportunity.
        </p>
      </div>
    </FooterContents>
    <FooterBottom>
      <ul>
        <li>Copyright {year} Tax Foundation</li>
        <li>
          <a href="https://www.facebook.com/taxfoundation">Facebook</a>
        </li>
        <li>
          <a href="https://twitter.com/taxfoundation">Twitter</a>
        </li>
        <li>
          <a href="https://taxfoundation.org/privacy-policy/">Privacy Policy</a>
        </li>
      </ul>
    </FooterBottom>
  </StyledFooter>
);

Footer.propTypes = {
  year: PropTypes.number,
};

export default Footer;

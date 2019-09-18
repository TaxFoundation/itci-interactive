import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Theme from '../Theme';

const StyledFooter = styled.footer`
  background-color: #eee;
  margin-top: 1rem;
`;

const FooterContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 2rem 1rem;
  width: 960px;
`;

const FooterBottom = styled.div`
  background-color: #bbb;
  font-size: 0.8rem;
  padding: 0.5rem;
  text-align: center;
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
      <div>Paragraph</div>
    </FooterContents>
    <FooterBottom>Copyright {year} Tax Foundation</FooterBottom>
  </StyledFooter>
);

export default Footer;

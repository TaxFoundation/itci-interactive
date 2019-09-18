import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #ddd;
  margin-top: 1rem;
`;

const FooterContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  padding: 1rem;
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
      <div>TF info</div>
      <div>Paragraph</div>
    </FooterContents>
    <FooterBottom>Copyright {year} Tax Foundation</FooterBottom>
  </StyledFooter>
);

export default Footer;

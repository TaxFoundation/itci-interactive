import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #ddd;
`;

const FooterContents = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  width: 960px;
`;

const FooterBottom = styled.div`
  background-color: #bbb;
  text-align: center;
`;

const Footer = () => (
  <StyledFooter>
    <FooterContents>
      <div>TF info</div>
      <div>Paragraph</div>
    </FooterContents>
    <FooterBottom>Stuff</FooterBottom>
  </StyledFooter>
);

export default Footer;

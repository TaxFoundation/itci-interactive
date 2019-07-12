import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.color};
`;

const MainContents = styled.div`
  display: grid;
  margin: 0 auto;
  width: 960px;
`;

const Main = ({ children }) => (
  <StyledMain>
    <MainContents>{children}</MainContents>
  </StyledMain>
);

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;

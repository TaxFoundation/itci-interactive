import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMain = styled.main`
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.color};
`;

const MainContents = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, 960px);
  justify-content: center;
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

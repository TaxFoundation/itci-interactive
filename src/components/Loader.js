import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

import Theme from '../Theme';

const Colors = keyframes`
  0% {
    color: ${Theme.final};
  }
  17% {
    color: ${Theme.corporate};
  }
  33% {
    color: ${Theme.individual};
  }
  50% {
    color: ${Theme.consumption};
  }
  67% {
    color: ${Theme.property};
  }
  83% {
    color: ${Theme.crossborder};
  }
  100% {
    color: ${Theme.final};
  }
`;

const StyledLoadingText = styled.div`
  align-items: center;
  animation: 5s ${Colors} ease-in-out infinite;
  display: grid;
  font-size: calc(0.8rem + 2vw);
  height: 100%;
  justify-content: center;
  text-align: center;
`;

const Loader = ({ children }) => (
  <StyledLoadingText>
    <span>{children}</span>
  </StyledLoadingText>
);

Loader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Loader;

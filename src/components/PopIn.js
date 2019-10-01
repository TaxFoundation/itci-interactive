import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setCookie, getCookie } from '../helpers';

const StyledPopIn = styled.div`
  background-color: ${props => props.theme.white};
  border-top: 3px solid ${props => props.theme.orange};
  bottom: 0;
  box-shadow: ${props =>
    props.active ? `0 -2px 10px 1px ${props.theme.borderColor}` : 'none'};
  display: none;
  left: 0;
  right: 0;
  position: fixed;
  transform: ${props => (props.active ? 'none' : 'translateY(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 4;

  @media screen and (min-width: 1120px) {
    display: block;
  }
`;

const Container = styled.div`
  align-items: start;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr auto;
  margin: 0.5rem auto;
  max-width: 960px;
`;

const Close = styled.div`
  color: ${props => props.theme.orange};
  cursor: pointer;
  font-size: 2rem;
`;

const PopIn = ({ children }) => {
  const [active, setActive] = useState(false);
  const [dismissed, setDismissed] = useState(
    JSON.parse(getCookie('itci-pop-in-dismissed')) || false
  );
  const dismiss = () => {
    setActive(false);
    setDismissed(true);
    setCookie('itci-pop-in-dismissed', true, 7);
  };

  useEffect(() => {
    let timer;
    if (!active && !dismissed) {
      timer = setTimeout(() => setActive(true), 30000);
    }
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPopIn active={active}>
      <Container>
        {React.cloneElement(children, { dismiss })}
        <Close onClick={() => dismiss()}>&otimes;</Close>
      </Container>
    </StyledPopIn>
  );
};

PopIn.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PopIn;

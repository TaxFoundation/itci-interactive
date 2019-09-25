import styled from 'styled-components';

const StyledBox = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  display: none;

  @media screen and (min-width: 800px) {
    display: block;
  }

  h2 {
    background-color: ${props => props.theme.orange};
    border: 1px solid ${props => props.theme.orange};
    color: ${props => props.theme.white};
    margin: -1px;
    padding: 0.5rem;
    text-align: center;
  }
`;

export default StyledBox;

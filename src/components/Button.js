import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  cursor: pointer;
  display: block;
  font-family: ${props => props.theme.fontFamilies.lato};
  font-size: 1rem;
  line-height: 1.5;
  margin: 0.5rem 0;
  padding: 0.8rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  width: 100%;
`;

const BlackButton = styled(Button)`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.color};
  color: ${props => props.theme.color};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.white};
  }
`;

const OrangeButton = styled(Button)`
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.orange};
  color: ${props => props.theme.orange};
  font-family: ${props => props.theme.fontFamilies.lato};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.white};
  }
`;

export { BlackButton, OrangeButton };

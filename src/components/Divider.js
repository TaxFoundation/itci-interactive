import styled from 'styled-components';

const Divider = styled.hr`
  border: none;
  height: 1px;
  background: ${props => props.theme.borderColor};
  margin: 1rem 0;
  width: 100%;
`;

export default Divider;

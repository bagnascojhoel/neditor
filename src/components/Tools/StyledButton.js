import styled from 'styled-components';
import { colors } from '../../utils/styles/helpers';

const StyledButton = styled.span`
  display: flex;
  align-content: center;
  justify-content: center;
  background: none;
  border: none;
  color: ${colors.ligthBlue};

  &:focus {
    outline: none;
  }
`

export default StyledButton;
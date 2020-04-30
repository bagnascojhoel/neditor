import styled from 'styled-components';
import { colors } from '../../utils/styles/helpers';

const StyledButton = styled.button`
  display: inline-block;
  background: none;
  border: none;
  color: ${colors.ligthBlue};

  &:focus {
    outline: none;
  }
`

export default StyledButton;
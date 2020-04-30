import styled from 'styled-components';
import {colors} from '../utils/styles/helpers';

const Container = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  min-width: 250px;
  width: 70vw;
  max-width: 768px;
  border-radius: 15px;
  box-shadow: ${colors.shadow.inset};
  color: ${colors.ligthBlue};
  padding: 1rem;
  padding-top: 0;
  background-color: ${colors.accentWhite};
`;

export default Container;
import styled from 'styled-components/native';
import {height} from '@assets/constants';

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${`${height / 4}px`};
`;

export const Heading = styled.Text`
  font-size: 35px;
  font-weight: 700;
  color: ${({theme}) => theme.textColor.black};
`;

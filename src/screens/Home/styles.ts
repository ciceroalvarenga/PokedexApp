import styled from 'styled-components/native';
import {height} from '@assets/constants';

export const Container = styled.View`
  padding: 20px;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${`${height / 4}px`};
`;

export const TitleHeading = styled.Text`
  font-size: 35px;
  font-weight: 700;
  color: ${({theme}) => theme.textColor.black};
  font-family: 'SF-Pro-Display-Bold';
`;

export const TextHeading = styled.Text`
  color: ${({theme}) => theme.textColor.black};
  font-weight: 400;
  font-size: 16px;
`;

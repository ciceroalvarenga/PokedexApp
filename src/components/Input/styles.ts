import styled from 'styled-components/native';
import {TextInput} from 'react-native';

export const ContainerInput = styled.View`
  background-color: ${({theme}) => theme.customColor.input};
  margin: 25px 0 20px 0;
  border-radius: 10px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  color: ${({theme}) => theme.textColor.black};
`;

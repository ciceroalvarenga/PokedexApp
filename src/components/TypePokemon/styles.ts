import styled from 'styled-components/native';
import {TypePokemonProps} from '.';

export const Container = styled.View<TypePokemonProps>`
  background-color: ${({theme, type}) => theme.colors[type]};
  border-radius: 5px;
  margin: 2px 5px 0 0;
  padding: 5px;
  flex-direction: row;
  align-items: center;
`;

export const TextType = styled.Text`
  color: ${({theme}) => theme.textColor.white};
  text-transform: capitalize;
  margin-left: 2px;
`;

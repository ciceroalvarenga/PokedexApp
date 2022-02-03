import styled from 'styled-components/native';

type ContainerProps = {
  typePokemon: string;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  margin: 12px 0;
  padding: 15px;
  border-radius: 10px;

  background-color: ${({theme, typePokemon}) =>
    theme.backgroundColors[typePokemon]};
`;

export const Content = styled.View``;

export const NamePokemon = styled.Text`
  font-size: 26px;
  color: ${({theme}) => theme.textColor.white};
  font-family: 'SF-Pro-Display-Bold';
  text-transform: capitalize;
`;

export const NumberPokemon = styled.Text`
  font-size: 12px;
  color: ${({theme}) => theme.textColor.number};
  font-family: 'SF-Pro-Display-Bold';
`;

export const ImagePokemon = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ContainerImage = styled.View`
  position: absolute;
  right: 0px;
  top: -20px;
`;

export const ContainerType = styled.View`
  flex-direction: row;
  align-items: center;
`;

import {height} from '@assets/constants';
import styled from 'styled-components/native';

type TypePokemonProps = {
  typePokemon: string;
};

type StatsLineProps = {
  typePokemon: string;
  numberStatsPokemon: number;
};

export const Container = styled.View<TypePokemonProps>`
  flex: 1;
  padding: 10px;

  background-color: ${({theme, typePokemon}) =>
    theme.backgroundColors[typePokemon]};
`;

export const ContainerIcon = styled.TouchableOpacity`
  padding: 0 15px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

export const NamePokemon = styled.Text`
  font-size: 26px;
  color: ${({theme}) => theme.textColor.white};
  font-family: 'SF-Pro-Display-Bold';
  text-transform: capitalize;
`;

export const NumberPokemon = styled.Text`
  font-size: 26px;
  color: ${({theme}) => theme.textColor.white};
  font-family: 'SF-Pro-Display-Bold';
`;

export const ContainerImage = styled.View`
  align-items: center;
  justify-content: center;
  margin: 0px 0;
`;

export const ImagePokemon = styled.Image`
  width: 120px;
  height: 120px;
`;

export const ContainerContent = styled.View`
  background-color: ${({theme}) => theme.textColor.white};
  border-radius: 10px;
  padding: 20px;
  align-items: center;
  flex: 1;
`;

export const ContainerAbout = styled.View`
  flex-direction: row;
  margin: 10px 0;
`;

export const ContainerStats = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

export const TextInformation = styled.Text`
  font-size: 15px;
  color: ${({theme}) => theme.textColor.black};
  text-transform: capitalize;
`;

export const TitleInformation = styled.Text<TypePokemonProps>`
  font-size: 24px;
  font-family: 'SF-Pro-Display-Bold';
  color: ${({theme, typePokemon}) => theme.backgroundColors[typePokemon]};
`;

export const ContentWeight = styled.View`
  margin: 10px 30px;
  align-items: center;
`;
export const ContentHeight = styled.View`
  margin: 10px 30px;
  align-items: center;
`;

export const DividingLine = styled.View`
  height: 100px;
  width: 2px;
  background-color: ${({theme}) => theme.colors.normal};
  margin: 0 10px;
`;

export const ContainerStatusLine = styled.View`
  margin-top: 5px;
`;

export const StatusLine = styled.View<StatsLineProps>`
  width: ${({numberStatsPokemon}) => `${numberStatsPokemon}px`};
  margin: 5px 0 10px 6px;
  height: 5px;
  margin-left: 10px;
  border-radius: 5px;
  background-color: ${({theme, typePokemon}) =>
    theme.backgroundColors[typePokemon]};
`;

export const ContainerType = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

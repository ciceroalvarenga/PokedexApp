import React from 'react';
import {} from 'react-native';
import Pokeball_header from '../../assets/Images/Pokeball_header.png';
import {Container, ImageBackground, TitleHeading, TextHeading} from './styles';

export function Home() {
  return (
    <ImageBackground resizeMode="contain" source={Pokeball_header}>
      <Container>
        <TitleHeading>PokéDex</TitleHeading>
        <TextHeading>
          Procure o Pokémon pelo nome ou usando o número National Pokédex.
        </TextHeading>
      </Container>
    </ImageBackground>
  );
}

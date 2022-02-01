import React from 'react';
import {View, Text} from 'react-native';
import Pokeball_header from '../../assets/Images/Pokeball_header.png';
import {ImageBackground, Heading} from './styles';

export function Home() {
  return (
    <View>
      <ImageBackground resizeMode="contain" source={Pokeball_header}>
        <Heading>PokéDex</Heading>
        <Text>
          Procure o Pokémon pelo nome ou usando o número National Pokédex.
        </Text>
      </ImageBackground>
    </View>
  );
}

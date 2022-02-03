import {TypePokemon} from '@components/TypePokemon';
import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {
  Container,
  NamePokemon,
  Content,
  NumberPokemon,
  ImagePokemon,
  ContainerImage,
  ContainerType,
} from './styles';

type CardProps = TouchableOpacityProps & {
  idNumber: string;
  name: string;
  spriteUrl: string;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};

export function Card({name, spriteUrl, types, idNumber, ...rest}: CardProps) {
  const numberPokemon = ('000' + idNumber).slice(-3);

  return (
    <Container {...rest} typePokemon={types[0].type.name}>
      <Content>
        <NumberPokemon>#{numberPokemon}</NumberPokemon>
        <NamePokemon>{name}</NamePokemon>
        <ContainerType>
          {types.map(type => (
            <TypePokemon key={Math.random()} type={type.type.name} />
          ))}
        </ContainerType>
      </Content>
      <ContainerImage>
        <ImagePokemon
          source={{
            uri: spriteUrl,
          }}
        />
      </ContainerImage>
    </Container>
  );
}

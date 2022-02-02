import {TypePokemon} from '@components/TypePokemon';
import React from 'react';

// import theme from '@global/styles/theme';

import {
  Container,
  NamePokemon,
  Content,
  NumberPokemon,
  ImagePokemon,
  ContainerImage,
  ContainerType,
} from './styles';

type CardProps = {
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

export function Card({name, spriteUrl, types}: CardProps) {
  return (
    <Container typePokemon={types[0].type.name}>
      <Content>
        <NumberPokemon>#001</NumberPokemon>
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

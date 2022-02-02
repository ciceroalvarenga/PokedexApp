import React from 'react';

import {Icon} from '@components/Icon';

import {Container, TextType} from './styles';

export type TypePokemonProps = {
  type: string;
};

export function TypePokemon({type}: TypePokemonProps) {
  return (
    <Container type={type}>
      <Icon name={type} paddingHorizontal={0} width={15} height={15} />
      <TextType>{type}</TextType>
    </Container>
  );
}

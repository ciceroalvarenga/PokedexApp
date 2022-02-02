import theme from '@global/styles/theme';
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

type FooterListProps = {
  load: boolean;
};

export function FooterList({load}: FooterListProps) {
  if (!load) {
    return null;
  }
  return (
    <Container>
      <ActivityIndicator size={25} color={theme.colors.poison} />
    </Container>
  );
}

import React from 'react';
import {TextInputProps} from 'react-native';

import {Icon} from '@components/Icon';

import Search from '../../assets/Icons/search.svg';

import {ContainerInput, InputText} from './styles';
import theme from '@global/styles/theme';

type Props = TextInputProps;

export function Input({...rest}: Props) {
  return (
    <ContainerInput>
      <Icon paddingHorizontal={10}>
        <Search color={theme.textColor.grey} />
      </Icon>
      <InputText {...rest} />
    </ContainerInput>
  );
}

import React from 'react';
import {View} from 'react-native';
import {TypePokemon} from '@components/TypePokemon';
import {RootState} from '@store/store';
import {useSelector} from 'react-redux';
import {Icon} from '@components/Icon';

import Back from '@assets/Icons/back.svg';

import {
  Container,
  ImagePokemon,
  Header,
  NumberPokemon,
  NamePokemon,
  ContainerImage,
  ContainerContent,
  TextInformation,
  TitleInformation,
  ContainerAbout,
  ContentWeight,
  ContentHeight,
  ContainerStats,
  DividingLine,
  StatusLine,
  ContainerStatusLine,
  ContainerType,
  ContainerIcon,
} from './styles';

export function AboutPokemons({navigation}: any) {
  const pokemon = useSelector((state: RootState) => state.pokemon);

  const numberPokemon = ('000' + pokemon.id).slice(-3);

  return (
    <Container typePokemon={pokemon.types[0].type.name}>
      <ContainerIcon onPress={() => navigation.goBack()}>
        <Icon paddingHorizontal={10}>
          <Back />
        </Icon>
      </ContainerIcon>

      <Header>
        <NamePokemon>{pokemon.name}</NamePokemon>
        <NumberPokemon>#{numberPokemon}</NumberPokemon>
      </Header>
      <ContainerImage>
        <ImagePokemon
          source={{
            uri: pokemon.spriteUrl,
          }}
        />
      </ContainerImage>
      <ContainerContent>
        <ContainerType>
          {pokemon.types.map(type => (
            <TypePokemon key={Math.random()} type={type.type.name} />
          ))}
        </ContainerType>

        <TitleInformation typePokemon={pokemon.types[0].type.name}>
          About
        </TitleInformation>

        <ContainerAbout>
          <ContentWeight>
            <TextInformation>
              ⚖️{' '}
              {pokemon.weight
                ?.toString()
                .slice(0, pokemon.weight.toString().length - 1)}
              .
              {pokemon.weight
                ?.toString()
                .slice(
                  pokemon.weight.toString().length - 1,
                  pokemon.weight.toString().length,
                )}{' '}
              Kg
            </TextInformation>
            <TextInformation>Weight</TextInformation>
          </ContentWeight>
          <ContentHeight>
            <TextInformation>📏 {pokemon.height} m</TextInformation>
            <TextInformation>Height</TextInformation>
          </ContentHeight>
        </ContainerAbout>

        <TitleInformation typePokemon={pokemon.types[0].type.name}>
          Base Stats
        </TitleInformation>
        <ContainerStats>
          <View>
            {pokemon.stats.map(stats => (
              <TextInformation key={Math.random()}>
                {stats.stat.name}
              </TextInformation>
            ))}
          </View>
          <DividingLine />
          <View>
            {pokemon.stats.map(stats => (
              <TextInformation key={Math.random()}>
                {stats.base_stat}
              </TextInformation>
            ))}
          </View>
          <ContainerStatusLine>
            {pokemon.stats.map(stats => (
              <StatusLine
                key={Math.random()}
                numberStatsPokemon={stats.base_stat}
                typePokemon={pokemon.types[0].type.name}
              />
            ))}
          </ContainerStatusLine>
        </ContainerStats>
      </ContainerContent>
    </Container>
  );
}

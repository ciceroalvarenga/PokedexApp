import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Card} from '@components/Card';
import {Input} from '@components/Input';

import GetPokemons from './pokemonServices';

import theme from '@global/styles/theme';
import {
  Container,
  ContainerCard,
  ImageBackground,
  TitleHeading,
  TextHeading,
} from './styles';

import Pokeball_header from '../../assets/Images/Pokeball_header.png';
import {FooterList} from '@components/FooterList';

type PropsPokemons = {
  id: string;
  height: number;
  name: string;
  spriteUrl: string;
  weight: number;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
};

export function Home() {
  const [pokemons, setPokemons] = useState<PropsPokemons[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    loadApi();
  }, []);

  async function loadApi() {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await GetPokemons({offset});
    setPokemons([...pokemons, ...response]);
    setOffset(offset + 10);
    setLoading(false);
  }

  return (
    <>
      <ImageBackground resizeMode="contain" source={Pokeball_header}>
        <Container>
          <TitleHeading>PokéDex</TitleHeading>
          <TextHeading>
            Procure o Pokémon pelo nome ou usando o número National Pokédex.
          </TextHeading>
          <Input
            placeholder="Digite o nome do Pokémon!"
            placeholderTextColor={theme.textColor.grey}
          />
        </Container>
      </ImageBackground>
      <ContainerCard>
        <FlatList
          data={pokemons}
          keyExtractor={item => item.id}
          style={{marginBottom: 180}}
          initialNumToRender={pokemons.length}
          renderItem={({item}) => (
            <>
              <Card
                key={item.id}
                name={item.name}
                spriteUrl={item.spriteUrl}
                types={item.types}
              />
            </>
          )}
          onEndReached={loadApi}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<FooterList load={loading} />}
        />
      </ContainerCard>
    </>
  );
}

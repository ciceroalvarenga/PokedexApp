import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Card} from '@components/Card';
import {Input} from '@components/Input';

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
import PokemonApiGet from '@services/PokemonServices';
import {useDispatch} from 'react-redux';
import {getPokemon} from '@store/pokemonSlice';

export type PropsPokemons = {
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
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    },
  ];
};

export function Home({navigation}: any) {
  const dispatch = useDispatch();
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
    const response = await PokemonApiGet({offset});
    setPokemons([...pokemons, ...response]);
    setOffset(offset + 10);
    setLoading(false);
  }

  function handleClickPokemom(item: PropsPokemons) {
    const pokemonSelected: PropsPokemons = item;
    dispatch(getPokemon(pokemonSelected));
    navigation.navigate('AboutPokemons');
  }

  return (
    <>
      <ImageBackground resizeMode="contain" source={Pokeball_header}>
        <Container>
          <TitleHeading>PokéDex</TitleHeading>
          <TextHeading>
            Search for Pokémon by name or using the National Pokédex number.
          </TextHeading>
          <Input
            placeholder="What Pokémon are you looking for?
            "
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
                idNumber={item.id}
                name={item.name}
                spriteUrl={item.spriteUrl}
                types={item.types}
                onPress={() => handleClickPokemom(item)}
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

import {createSlice} from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    id: '',
    height: 0,
    name: '',
    spriteUrl: '',
    weight: 0,
    types: [
      {
        type: {
          name: '',
        },
      },
    ],
    stats: [
      {
        base_stat: 0,
        stat: {
          name: '',
        },
      },
    ],
  },
  reducers: {
    getPokemon(state, {payload}) {
      return payload;
    },
  },
});

export const {getPokemon} = pokemonSlice.actions;
export default pokemonSlice.reducer;

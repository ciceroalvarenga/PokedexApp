import qs from 'qs';

import {api} from '@services/api';
import StringService from '@services/StringService';

type GetPokemonsProps = {
  offset: any;
};

async function PokemonApiGet({offset}: GetPokemonsProps) {
  const params = {
    limit: 10,
    offset: offset,
  };

  const result = await api.get(`pokemon?${qs.stringify(params)}`).then(res => {
    return res.data.results;
  });

  for (let i = 0; i < result.length; i++) {
    const id = StringService.getIdFromUrl(result[i].url);
    result[i].id = id;
    result[
      i
    ].spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result[i].id}.png`;

    const detailResponse = await api.get(`/pokemon/${result[i].id}`);
    const detail = detailResponse.data;
    result[i].types = detail.types;
    result[i].height = detail.height;
    result[i].weight = detail.weight;
    result[i].stats = detail.stats;
  }

  return result;
}

export default PokemonApiGet;

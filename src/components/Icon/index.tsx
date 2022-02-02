import React from 'react';

import Bug from '@assets/Icons/TypesIcons/bug.svg';
import Dark from '@assets/Icons/TypesIcons/dark.svg';
import Dragon from '@assets/Icons/TypesIcons/dragon.svg';
import Electric from '@assets/Icons/TypesIcons/electric.svg';
import Fairy from '@assets/Icons/TypesIcons/fairy.svg';
import Fighting from '@assets/Icons/TypesIcons/fighting.svg';
import Fire from '@assets/Icons/TypesIcons/fire.svg';
import Flying from '@assets/Icons/TypesIcons/flying.svg';
import Ghost from '@assets/Icons/TypesIcons/ghost.svg';
import Grass from '@assets/Icons/TypesIcons/grass.svg';
import Ground from '@assets/Icons/TypesIcons/ground.svg';
import Ice from '@assets/Icons/TypesIcons/ice.svg';
import Normal from '@assets/Icons/TypesIcons/normal.svg';
import Poison from '@assets/Icons/TypesIcons/poison.svg';
import Psychic from '@assets/Icons/TypesIcons/psychic.svg';
import Rock from '@assets/Icons/TypesIcons/rock.svg';
import Steel from '@assets/Icons/TypesIcons/steel.svg';
import Water from '@assets/Icons/TypesIcons/water.svg';

import {ContainerIcon} from './styles';
import theme from '@global/styles/theme';

type PropsIcon = {
  width?: number;
  height?: number;
  name?: string;
  paddingHorizontal?: number;
  children?: any;
};

export function Icon({
  children,
  name,
  width,
  height,
  paddingHorizontal,
}: PropsIcon) {
  let CustonIcon;
  switch (name) {
    case 'grass':
      CustonIcon = Grass;
      break;
    case 'fire':
      CustonIcon = Fire;
      break;
    case 'dragon':
      CustonIcon = Dragon;
      break;
    case 'bug':
      CustonIcon = Bug;
      break;
    case 'water':
      CustonIcon = Water;
      break;
    case 'electric':
      CustonIcon = Electric;
      break;
    case 'fairy':
      CustonIcon = Fairy;
      break;
    case 'fighting':
      CustonIcon = Fighting;
      break;
    case 'flying':
      CustonIcon = Flying;
      break;
    case 'ghost':
      CustonIcon = Ghost;
      break;
    case 'ground':
      CustonIcon = Ground;
      break;
    case 'ice':
      CustonIcon = Ice;
      break;
    case 'normal':
      CustonIcon = Normal;
      break;
    case 'poison':
      CustonIcon = Poison;
      break;
    case 'psychic':
      CustonIcon = Psychic;
      break;
    case 'rock':
      CustonIcon = Rock;
      break;
    case 'steel':
      CustonIcon = Steel;
      break;
    default:
      CustonIcon = Dark;
  }

  return (
    <ContainerIcon paddingHorizontal={paddingHorizontal}>
      {name ? (
        <CustonIcon
          height={height}
          width={width}
          color={theme.textColor.white}
        />
      ) : (
        children
      )}
    </ContainerIcon>
  );
}

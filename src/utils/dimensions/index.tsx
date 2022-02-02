import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';

/**
 * Converte a dimensão da largura em porcentagem
 * 360, 760 - o design foi feito utilizando esta escala
 * @param dimension retirado diretamente de wireframes de design
 * @returns {string} porcentagem. ex: '25%'
 */
export const wp = (dimension: any) => {
  return wp2dp((dimension / 360) * 100 + '%');
};

/**
 * Converts width dimension to percentage
 * * 360, 760 - design were made using this scale
 * @param dimension retirado diretamente de wireframes de design
 * @returns {string} porcentagem. ex: '25%'
 */
export const hp = (dimension: number) => {
  return hp2dp((dimension / 760) * 100 + '%');
};

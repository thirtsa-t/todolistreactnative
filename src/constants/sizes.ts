import {Dimensions} from 'react-native';

const {height: windowHeight, width: windowWidth} = Dimensions.get('screen');

type Sizes =
  | 'BASE'
  | 'FONT'
  | 'ICON'
  | 'SPACING'
  | 'windowHeight'
  | 'windowWidth'

  // Input
  | 'INPUT_SPACING';

const SIZES: Record<Sizes, number> = {
  BASE: 16,
  FONT: 16,
  ICON: 24,
  SPACING: 14,
  windowHeight,
  windowWidth,

  // Input
  INPUT_SPACING: 8,
};

export default SIZES;

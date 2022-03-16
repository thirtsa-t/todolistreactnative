import {StyleSheet} from 'react-native';

import theme from '../constants/theme';

const styles = StyleSheet.create({
  defaultButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    backgroundColor: theme.COLORS.PRIMARY,
  },
  customText: {
    color: theme.COLORS.WHITE,
  },
  primary: {
    backgroundColor: theme.COLORS.PRIMARY,
  },
  transparent: {
    backgroundColor: theme.COLORS.TRANSPARENT,
  },
});

export default styles;

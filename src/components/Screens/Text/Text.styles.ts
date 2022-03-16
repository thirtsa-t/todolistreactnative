import {StyleSheet} from 'react-native';

import theme from '../constants/theme';

const styles = StyleSheet.create({
  default: {
    fontSize: theme.SIZES.FONT,
    color: theme.COLORS.DEFAULT,
  },
  bold: {fontWeight: '700'},
  center: {textAlign: 'center'},
});

export default styles;

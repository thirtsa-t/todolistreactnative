import { StyleSheet } from 'react-native';

import theme from '../../constants/theme';

const styles = StyleSheet.create({
  item: {
    ...theme.STYLES.row,
    ...theme.STYLES.center,
    paddingHorizontal: theme.SIZES.SPACING,
    paddingVertical: theme.SIZES.INPUT_SPACING,
  },
  label: {
    color: theme.COLORS.DEFAULT,
    fontSize: 16,
  },
});

export default styles;

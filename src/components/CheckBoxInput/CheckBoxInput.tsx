import React from 'react';
import { View, ViewStyle, ViewProps } from 'react-native';
import CheckBox, { CheckBoxProps } from '@react-native-community/checkbox';

import Text from '../Text';
import styles from './CheckBoxInput.styles';

export type CheckBoxInputProps = CheckBoxProps &
  ViewProps & {
    label: string;
    style?: ViewStyle;
  };

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({
  label,
  style,
  ...rest
}) => (
  <View style={[styles.item, style]}>
    <CheckBox disabled={false} {...rest} />
    <Text style={styles.label}>{label}</Text>
  </View>
);

export default CheckBoxInput;

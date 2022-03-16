import React from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';

import styles from './Text.styles';

export type TypographyProps = TextProps & {
  size?: number;
  color?: string;
  bold?: boolean;
  center?: boolean;
  style?: TextStyle;
};

const Text: React.FC<TypographyProps> = ({
  size,
  color,
  bold,
  center,
  style,
  children,
  ...rest
}) => {
  const textStyle: TextStyle | any = [
    styles.default,
    size && {fontSize: size},
    color && {color},
    bold && styles.bold,
    center && styles.center,
    style && style,
  ];

  return (
    <RNText style={textStyle} {...rest}>
      {children}
    </RNText>
  );
};

export default Text;

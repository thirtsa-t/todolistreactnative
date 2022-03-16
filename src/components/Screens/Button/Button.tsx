import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';

import Text from '../Text';
import styles from './Button.styles';

export type ButtonProps = TouchableOpacityProps & {
  primary?: boolean;
  transparent?: boolean;
  textStyle?: TextStyle;
  style?: ViewStyle;
};

const Button: React.FC<ButtonProps> = ({
  children,
  disabled,
  primary,
  transparent,
  textStyle,
  style,
  ...rest
}) => {
  const renderContent = () => {
    const textStyles = [styles.customText, textStyle];

    let content = children;
    const isString = children && typeof children === 'string';

    if (isString) {
      content = (
        <Text bold style={textStyles}>
          {content}
        </Text>
      );
    }

    return content;
  };

  const buttonStyles: ViewStyle | any = [
    styles.defaultButton,
    primary && styles.primary,
    transparent && styles.transparent,
    style,
  ];

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      style={buttonStyles}
      {...rest}>
      {renderContent()}
    </TouchableOpacity>
  );
};

export default Button;

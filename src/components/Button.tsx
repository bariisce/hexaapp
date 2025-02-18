import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { COLORS, TYPOGRAPHY, SPACING } from '../styles/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  style,
  textStyle,
  disabled,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        disabled && styles.buttonDisabled,
        style,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.text} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            disabled && styles.buttonTextDisabled,
            textStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.lg,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: COLORS.primary + '80',
  },
  buttonText: {
    color: COLORS.text,
    fontSize: TYPOGRAPHY.button.fontSize,
    fontWeight: TYPOGRAPHY.button.fontWeight as '400' | '500' | '600' | 'bold',
  },
  buttonTextDisabled: {
    color: COLORS.text + '80',
  },
}); 
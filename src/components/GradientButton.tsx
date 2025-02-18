import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { gradientButtonStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';

interface GradientButtonProps {
  title: string;
  onPress: () => void;
  colors?: string[];
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: string;
  disabled?: boolean;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  title,
  onPress,
  colors = ['#4B0082', '#800080'],
  style,
  textStyle,
  icon,
  disabled = false,
}) => {
  const buttonColors = disabled ? [COLORS.surface, COLORS.surface] : colors;

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={onPress}
      disabled={disabled}
    >
      <LinearGradient
        colors={buttonColors as [string, string]}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[styles.text, disabled && styles.disabledText, textStyle]}>
          {title} {icon}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GradientButton; 
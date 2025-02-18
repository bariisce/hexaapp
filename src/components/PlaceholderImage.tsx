import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../constants/theme';

interface PlaceholderImageProps {
  style?: object;
  colors?: [string, string];
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  style = {}, 
  colors = [COLORS.surface, COLORS.primary]
}) => {
  return (
    <View style={[styles.container, style]}>
      <LinearGradient
        colors={colors}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 16,
    aspectRatio: 1,
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
});

export default PlaceholderImage; 
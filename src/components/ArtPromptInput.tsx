import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { COLORS } from '../constants/theme';
import { aiArtCreateStyles as styles } from '../styles/screens';

interface ArtPromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const ArtPromptInput: React.FC<ArtPromptInputProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.promptSection}>
      <Text style={styles.promptTitle}>Enter Your Prompt</Text>
      <View style={styles.promptInputContainer}>
        <TextInput
          style={styles.promptInput}
          placeholder="A minimalist black-ink line art of a rose with geometric shapes"
          placeholderTextColor={COLORS.textSecondary}
          value={value}
          onChangeText={onChangeText}
          multiline
        />
        <Text style={styles.charCount}>{value.length}/500</Text>
      </View>
    </View>
  );
}; 
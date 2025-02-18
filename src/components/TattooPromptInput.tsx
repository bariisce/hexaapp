import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { COLORS } from '../constants/theme';
import { aiTattooCreateStyles as styles } from '../styles/screens';

interface TattooPromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const TattooPromptInput: React.FC<TattooPromptInputProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.promptSection}>
      <Text style={styles.promptTitle}>Enter Your Prompt</Text>
      <View style={styles.promptInputContainer}>
        <TextInput
          style={styles.promptInput}
          placeholder="A minimalist black-ink line tattoo of a rose with geometric shapes"
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
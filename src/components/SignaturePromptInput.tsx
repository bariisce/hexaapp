import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { COLORS } from '../constants/theme';
import { aiSignatureCreateStyles as styles } from '../styles/screens';

interface SignaturePromptInputProps {
  value: string;
  onChangeText: (text: string) => void;
}

export const SignaturePromptInput: React.FC<SignaturePromptInputProps> = ({
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.promptSection}>
      <Text style={styles.promptTitle}>Enter Your Prompt</Text>
      <View style={styles.promptInputContainer}>
        <TextInput
          style={styles.promptInput}
          placeholder="A minimalist black-ink line signature of a rose with geometric shapes"
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
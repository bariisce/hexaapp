import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { EmojiTypeSelector } from '../components/EmojiTypeSelector';
import { EmojiPromptInput } from '../components/EmojiPromptInput';
import { EmojiStylesGrid } from '../components/EmojiStylesGrid';
import { aiEmojiCreateStyles as styles } from '../styles/screens';
import { useEmojiStyles } from '../hooks/useEmojiStyles';
import { useEmojiRequest } from '../hooks/useEmojiRequest';

type RootStackParamList = {
  AIEmoji: undefined;
  AIEmojiStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIEmoji'>;

const AIEmojiCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { emojiStyles, isLoading: isLoadingStyles } = useEmojiStyles(4);
  const { createRequest, isLoading: isCreating } = useEmojiRequest();

  const handleCreateEmoji = async () => {
    const success = await createRequest({
      prompt,
      selectedStyle: selectedStyle!,
      type: selectedType,
    });

    if (success) {
      setPrompt('');
      setSelectedStyle(null);
    }
  };

  const isLoading = isLoadingStyles || isCreating;

  return (
    <SafeAreaView style={styles.container}>
      <Header title="AI Emoji" />

      <EmojiTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <EmojiPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <EmojiStylesGrid
        styles={emojiStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AIEmojiStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#8B4513', '#CD853F']}
        style={styles.createButton}
        onPress={handleCreateEmoji}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AIEmojiCreateScreen; 
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { ArtTypeSelector } from '../components/ArtTypeSelector';
import { ArtPromptInput } from '../components/ArtPromptInput';
import { ArtStylesGrid } from '../components/ArtStylesGrid';
import { aiArtCreateStyles as styles } from '../styles/screens';
import { useArtStyles } from '../hooks/useArtStyles';
import { useArtRequest } from '../hooks/useArtRequest';

type RootStackParamList = {
  AIArt: undefined;
  AIArtStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIArt'>;

const AIArtCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { artStyles, isLoading: isLoadingStyles } = useArtStyles(4);
  const { createRequest, isLoading: isCreating } = useArtRequest();

  const handleCreateArt = async () => {
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
      <Header title="AI Art" />

      <ArtTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <ArtPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <ArtStylesGrid
        styles={artStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AIArtStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#800080', '#BA55D3']}
        style={styles.createButton}
        onPress={handleCreateArt}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AIArtCreateScreen; 
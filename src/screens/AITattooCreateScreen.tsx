import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { TattooTypeSelector } from '../components/TattooTypeSelector';
import { TattooPromptInput } from '../components/TattooPromptInput';
import { TattooStylesGrid } from '../components/TattooStylesGrid';
import { aiTattooCreateStyles as styles } from '../styles/screens';
import { useTattooStyles } from '../hooks/useTattooStyles';
import { useTattooRequest } from '../hooks/useTattooRequest';

type RootStackParamList = {
  AITattoo: undefined;
  AITattooStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AITattoo'>;

const AITattooCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { tattooStyles, isLoading: isLoadingStyles } = useTattooStyles(4);
  const { createRequest, isLoading: isCreating } = useTattooRequest();

  const handleCreateTattoo = async () => {
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
      <Header title="AI Tattoo" />

      <TattooTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <TattooPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <TattooStylesGrid
        styles={tattooStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AITattooStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#8B4513', '#CD853F']}
        style={styles.createButton}
        onPress={handleCreateTattoo}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AITattooCreateScreen; 
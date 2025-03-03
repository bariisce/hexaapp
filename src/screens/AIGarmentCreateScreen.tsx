import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { GarmentTypeSelector } from '../components/GarmentTypeSelector';
import { GarmentPromptInput } from '../components/GarmentPromptInput';
import { GarmentStylesGrid } from '../components/GarmentStylesGrid';
import { aiGarmentCreateStyles as styles } from '../styles/screens';
import { useGarmentStyles } from '../hooks/useGarmentStyles';
import { useGarmentRequest } from '../hooks/useGarmentRequest';

type RootStackParamList = {
  AIGarment: undefined;
  AIGarmentStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIGarment'>;

const AIGarmentCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { garmentStyles, isLoading: isLoadingStyles } = useGarmentStyles(4);
  const { createRequest, isLoading: isCreating } = useGarmentRequest();

  const handleCreateGarment = async () => {
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
      <Header title="AI Garment" />

      <GarmentTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <GarmentPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <GarmentStylesGrid
        styles={garmentStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AIGarmentStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#8B4513', '#CD853F']}
        style={styles.createButton}
        onPress={handleCreateGarment}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AIGarmentCreateScreen; 
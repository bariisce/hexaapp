import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { MockupTypeSelector } from '../components/MockupTypeSelector';
import { MockupPromptInput } from '../components/MockupPromptInput';
import { MockupStylesGrid } from '../components/MockupStylesGrid';
import { aiMockupCreateStyles as styles } from '../styles/screens';
import { useMockupStyles } from '../hooks/useMockupStyles';
import { useMockupRequest } from '../hooks/useMockupRequest';

type RootStackParamList = {
  AIMockup: undefined;
  AIMockupStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIMockup'>;

const AIMockupCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { mockupStyles, isLoading: isLoadingStyles } = useMockupStyles(4);
  const { createRequest, isLoading: isCreating } = useMockupRequest();

  const handleCreateMockup = async () => {
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
      <Header title="AI Mockup" />

      <MockupTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <MockupPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <MockupStylesGrid
        styles={mockupStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AIMockupStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#483D8B', '#6A5ACD']}
        style={styles.createButton}
        onPress={handleCreateMockup}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AIMockupCreateScreen; 
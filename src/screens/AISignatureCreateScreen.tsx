import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { SignatureTypeSelector } from '../components/SignatureTypeSelector';
import { SignaturePromptInput } from '../components/SignaturePromptInput';
import { SignatureStylesGrid } from '../components/SignatureStylesGrid';
import { aiSignatureCreateStyles as styles } from '../styles/screens';
import { useSignatureStyles } from '../hooks/useSignatureStyles';
import { useSignatureRequest } from '../hooks/useSignatureRequest';

type RootStackParamList = {
  AISignature: undefined;
  AISignatureStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AISignature'>;

const AISignatureCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { signatureStyles, isLoading: isLoadingStyles } = useSignatureStyles(4);
  const { createRequest, isLoading: isCreating } = useSignatureRequest();

  const handleCreateSignature = async () => {
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
      <Header title="AI Signature" />

      <SignatureTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <SignaturePromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <SignatureStylesGrid
        styles={signatureStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AISignatureStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#8B4513', '#CD853F']}
        style={styles.createButton}
        onPress={handleCreateSignature}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AISignatureCreateScreen; 
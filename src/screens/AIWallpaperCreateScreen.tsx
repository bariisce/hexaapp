import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { WallpaperTypeSelector } from '../components/WallpaperTypeSelector';
import { WallpaperPromptInput } from '../components/WallpaperPromptInput';
import { WallpaperStylesGrid } from '../components/WallpaperStylesGrid';
import { aiWallpaperCreateStyles as styles } from '../styles/screens';
import { useWallpaperStyles } from '../hooks/useWallpaperStyles';
import { useWallpaperRequest } from '../hooks/useWallpaperRequest';

type RootStackParamList = {
  AIWallpaper: undefined;
  AIWallpaperStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIWallpaper'>;

const AIWallpaperCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { wallpaperStyles, isLoading: isLoadingStyles } = useWallpaperStyles(4);
  const { createRequest, isLoading: isCreating } = useWallpaperRequest();

  const handleCreateWallpaper = async () => {
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
      <Header title="AI Wallpaper" />

      <WallpaperTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <WallpaperPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <WallpaperStylesGrid
        styles={wallpaperStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AIWallpaperStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#8B0000', '#DC143C']}
        style={styles.createButton}
        onPress={handleCreateWallpaper}
        disabled={isLoading}
      />
    </SafeAreaView>
  );
};

export default AIWallpaperCreateScreen; 
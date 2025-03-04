import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import { RoomTypeSelector } from '../components/RoomTypeSelector';
import { RoomPromptInput } from '../components/RoomPromptInput';
import { RoomStylesGrid } from '../components/RoomStylesGrid';
import { aiRoomCreateStyles as styles } from '../styles/screens';
import { useRoomStyles } from '../hooks/useRoomStyles';
import { useRoomRequest } from '../hooks/useRoomRequest';

type RootStackParamList = {
  AIRoom: undefined;
  AIRoomStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIRoom'>;

const AIRoomCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'text' | 'image'>('text');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);

  const { roomStyles, isLoading: isLoadingStyles } = useRoomStyles(4);
  const { createRequest, isLoading: isCreating } = useRoomRequest();

  const handleCreateRoom = async () => {
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
      <Header title="AI Room" />

      <RoomTypeSelector
        selectedType={selectedType}
        onTypeSelect={setSelectedType}
      />

      <RoomPromptInput
        value={prompt}
        onChangeText={setPrompt}
      />

      <RoomStylesGrid
        styles={roomStyles}
        selectedStyle={selectedStyle}
        onStyleSelect={setSelectedStyle}
        onSeeAllPress={() => navigation.navigate('AIRoomStyles')}
        isPreview
      />

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        colors={['#006400', '#3CB371']}
        style={styles.createButton}
        onPress={handleCreateRoom}
        disabled={isLoading || !prompt || !selectedStyle}
      />
    </SafeAreaView>
  );
};

export default AIRoomCreateScreen; 
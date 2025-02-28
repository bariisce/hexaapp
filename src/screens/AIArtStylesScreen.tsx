import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { ArtStylesGrid } from '../components/ArtStylesGrid';
import { aiArtStylesStyles as styles } from '../styles/screens';
import { useArtStyles } from '../hooks/useArtStyles';

type RootStackParamList = {
  AIArtCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIArtCreate'>;

const AIArtStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { artStyles, isLoading } = useArtStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Art Styles" />
        {}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Art Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ArtStylesGrid
          styles={artStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIArtStylesScreen; 
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { WallpaperStylesGrid } from '../components/WallpaperStylesGrid';
import { aiWallpaperStylesStyles as styles } from '../styles/screens';
import { useWallpaperStyles } from '../hooks/useWallpaperStyles';

type RootStackParamList = {
  AIWallpaperCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIWallpaperCreate'>;

const AIWallpaperStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { wallpaperStyles, isLoading } = useWallpaperStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Wallpaper Styles" />
        {}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Wallpaper Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <WallpaperStylesGrid
          styles={wallpaperStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIWallpaperStylesScreen; 
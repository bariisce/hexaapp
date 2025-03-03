import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { GarmentStylesGrid } from '../components/GarmentStylesGrid';
import { aiGarmentStylesStyles as styles } from '../styles/screens';
import { useGarmentStyles } from '../hooks/useGarmentStyles';

type RootStackParamList = {
  AIGarmentCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIGarmentCreate'>;

const AIGarmentStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { garmentStyles, isLoading } = useGarmentStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Garment Styles" />
        {}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Garment Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <GarmentStylesGrid
          styles={garmentStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIGarmentStylesScreen; 
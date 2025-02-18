import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { TattooStylesGrid } from '../components/TattooStylesGrid';
import { aiTattooStylesStyles as styles } from '../styles/screens';
import { useTattooStyles } from '../hooks/useTattooStyles';

type RootStackParamList = {
  AITattooCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AITattooCreate'>;

const AITattooStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { tattooStyles, isLoading } = useTattooStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Tattoo Styles" />
        {/* İsterseniz buraya bir loading komponenti ekleyebilirsiniz */}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Tattoo Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TattooStylesGrid
          styles={tattooStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AITattooStylesScreen; 
import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { MockupStylesGrid } from '../components/MockupStylesGrid';
import { aiMockupStylesStyles as styles } from '../styles/screens';
import { useMockupStyles } from '../hooks/useMockupStyles';

type RootStackParamList = {
  AIMockupCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIMockupCreate'>;

const AIMockupStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { mockupStyles, isLoading } = useMockupStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Mockup Styles" />
        {}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Mockup Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <MockupStylesGrid
          styles={mockupStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIMockupStylesScreen; 
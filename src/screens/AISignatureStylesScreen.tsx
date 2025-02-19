import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { SignatureStylesGrid } from '../components/SignatureStylesGrid';
import { aiSignatureStylesStyles as styles } from '../styles/screens';
import { useSignatureStyles } from '../hooks/useSignatureStyles';

type RootStackParamList = {
  AISignatureCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AISignatureCreate'>;

const AISignatureStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { signatureStyles, isLoading } = useSignatureStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Signature Styles" />
        {/* İsterseniz buraya bir loading komponenti ekleyebilirsiniz */}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Signature Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <SignatureStylesGrid
          styles={signatureStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AISignatureStylesScreen; 
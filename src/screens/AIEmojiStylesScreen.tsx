import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { EmojiStylesGrid } from '../components/EmojiStylesGrid';
import { aiEmojiStylesStyles as styles } from '../styles/screens';
import { useEmojiStyles } from '../hooks/useEmojiStyles';

type RootStackParamList = {
  AIEmojiCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIEmojiCreate'>;

const AIEmojiStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { emojiStyles, isLoading } = useEmojiStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Emoji Styles" />
        {}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Emoji Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <EmojiStylesGrid
          styles={emojiStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIEmojiStylesScreen; 
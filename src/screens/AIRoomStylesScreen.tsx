import React from 'react';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import { RoomStylesGrid } from '../components/RoomStylesGrid';
import { aiRoomStylesStyles as styles } from '../styles/screens';
import { useRoomStyles } from '../hooks/useRoomStyles';

type RootStackParamList = {
  AIRoomCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AIRoomCreate'>;

const AIRoomStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const { roomStyles, isLoading } = useRoomStyles();

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Room Styles" />
        {}
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Room Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <RoomStylesGrid
          styles={roomStyles}
          selectedStyle={null}
          onStyleSelect={() => navigation.goBack()}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AIRoomStylesScreen; 
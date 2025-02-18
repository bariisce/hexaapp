import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import LogoStyleCard from '../components/LogoStyleCard';
import { aiLogoStylesStyles as styles } from '../styles/screens';
import { logoStylesService, LogoStyle } from '../services/firebase';

type RootStackParamList = {
  AILogoCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AILogoCreate'>;

const AILogoStylesScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [logoStyles, setLogoStyles] = useState<LogoStyle[]>([]);

  useEffect(() => {
    loadLogoStyles();
  }, []);

  const loadLogoStyles = async () => {
    try {
      const styles = await logoStylesService.getAllStyles();
      setLogoStyles(styles);
    } catch (error) {
      console.error('Logo stillerini yüklerken hata:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Logo Styles" />

      <ScrollView 
        style={styles.content}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.grid}>
          {logoStyles.map((style) => (
            <LogoStyleCard
              key={style.id}
              id={style.id}
              name={style.name}
              imageUrl={style.imageUrl}
              containerStyle={styles.styleCard}
              onPress={() => navigation.goBack()}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AILogoStylesScreen; 
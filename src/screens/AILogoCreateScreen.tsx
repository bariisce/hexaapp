import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Header from '../components/Header';
import GradientButton from '../components/GradientButton';
import LogoStyleCard from '../components/LogoStyleCard';
import { COLORS } from '../constants/theme';
import { aiLogoCreateStyles as styles } from '../styles/screens';
import { logoStylesService, logoRequestsService, LogoStyle } from '../services/firebase';

type RootStackParamList = {
  AILogo: undefined;
  AILogoStyles: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AILogo'>;

const AILogoCreateScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedType, setSelectedType] = useState<'graphic' | 'text'>('graphic');
  const [prompt, setPrompt] = useState('');
  const [logoStyles, setLogoStyles] = useState<LogoStyle[]>([]);
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadLogoStyles();
  }, []);

  const loadLogoStyles = async () => {
    try {
      const styles = await logoStylesService.getAllStyles();
      setLogoStyles(styles);
    } catch (error) {
      console.error('Error loading logo styles:', error);
      Alert.alert('Error', 'Failed to load logo styles');
    }
  };

  const handleCreateLogo = async () => {
    if (!prompt) {
      Alert.alert('Error', 'Please enter a prompt');
      return;
    }

    if (!selectedStyle) {
      Alert.alert('Error', 'Please select a logo style');
      return;
    }

    setIsLoading(true);
    try {
      await logoRequestsService.createRequest({
        prompt,
        selectedStyle,
        type: selectedType,
      });
      Alert.alert('Success', 'Your logo request has been submitted');
      setPrompt('');
      setSelectedStyle(null);
    } catch (error) {
      console.error('Error creating logo request:', error);
      Alert.alert('Error', 'Failed to create logo request');
    } finally {
      setIsLoading(false);
    }
  };

  // İlk 6 stili göster
  const previewStyles = logoStyles.slice(0, 6);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="AI Logo" />

      <View style={styles.typeSelector}>
        <TouchableOpacity 
          style={[
            styles.typeButton, 
            selectedType === 'graphic' && styles.selectedTypeButton
          ]}
          onPress={() => setSelectedType('graphic')}
        >
          <Text style={styles.typeButtonIcon}>✏️</Text>
          <Text style={styles.typeButtonText}>Graphic Logo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[
            styles.typeButton, 
            selectedType === 'text' && styles.selectedTypeButton
          ]}
          onPress={() => setSelectedType('text')}
        >
          <Text style={styles.typeButtonIcon}>Aa</Text>
          <Text style={styles.typeButtonText}>Text Logo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.promptSection}>
        <View style={styles.promptHeader}>
          <Text style={styles.promptTitle}>Enter Your Prompt</Text>
          <TouchableOpacity style={styles.surpriseButton}>
            <Text style={styles.surpriseIcon}>🎲</Text>
            <Text style={styles.surpriseText}>Surprise me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.promptInputContainer}>
          <TextInput
            style={styles.promptInput}
            placeholder="A blue lion logo reading 'HEXA' in bold letters"
            placeholderTextColor={COLORS.textSecondary}
            value={prompt}
            onChangeText={setPrompt}
            multiline
          />
          <Text style={styles.charCount}>{prompt.length}/500</Text>
        </View>
      </View>

      <View style={styles.stylesSection}>
        <View style={styles.stylesHeader}>
          <Text style={styles.stylesTitle}>Logo Styles</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AILogoStyles')}>
            <Text style={styles.seeAllText}>See all →</Text>
          </TouchableOpacity>
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={styles.stylesScroll}
        >
          {previewStyles.map((style) => (
            <LogoStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...styles.styleCard,
                ...(selectedStyle === style.id ? styles.selectedStyleCard : {})
              }}
              onPress={() => setSelectedStyle(style.id)}
            />
          ))}
        </ScrollView>
      </View>

      <GradientButton
        title={isLoading ? "Creating..." : "Create"}
        icon="✨"
        style={styles.createButton}
        onPress={handleCreateLogo}
        disabled={isLoading}
      />
    </SafeAreaView>
  );
};

export default AILogoCreateScreen; 
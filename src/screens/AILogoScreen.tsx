import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  AILogo: undefined;
  AILogoCreate: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'AILogo'>;

const AILogoScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#4B0082', '#1a1a2e']}
        style={styles.gradient}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
      >
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.promptContainer}>
            <Text style={styles.promptLabel}>ENTER YOUR PROMPT</Text>
            <View style={styles.promptBox}>
              <Text style={styles.promptExample}>Monogram logo of "ABM"</Text>
            </View>
          </View>

          <View style={styles.bottomContent}>
            <Text style={styles.title}>AI Logo</Text>
            <Text style={styles.description}>
              Bring your ideas to life with a professional logo. Just type your concept, choose your style, and watch Hexa transform it into reality with precision and creativity!
            </Text>

            <TouchableOpacity 
              style={styles.startButton}
              onPress={() => navigation.navigate('AILogoCreate')}
            >
              <LinearGradient
                colors={['#4B0082', '#800080']}
                style={styles.buttonGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              >
                <Text style={styles.startButtonText}>Start</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  gradient: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
    padding: 12,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  promptContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
  },
  promptLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: 8,
  },
  promptBox: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
  },
  promptExample: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  bottomContent: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    opacity: 0.8,
    marginBottom: 32,
  },
  startButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AILogoScreen; 
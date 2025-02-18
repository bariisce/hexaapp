import React, { useEffect } from 'react';
import { View, StyleSheet, Animated, Dimensions, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const { width } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const progressAnimation = new Animated.Value(0);
  const hexaOpacity = new Animated.Value(0);

  useEffect(() => {
    // Logo animasyonu
    Animated.sequence([
      Animated.timing(hexaOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      // Progress bar animasyonu
      Animated.timing(progressAnimation, {
        toValue: width * 0.7, // Progress bar genişliği
        duration: 2000,
        useNativeDriver: false,
      }),
    ]).start(() => {
      // Animasyonlar tamamlandığında HomeScreen'e yönlendir
      navigation.replace('Home');
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.hexagonContainer, { opacity: hexaOpacity }]}>
        <LinearGradient
          colors={['#87CEEB', '#9370DB', '#FF69B4']}
          style={styles.hexagon}
        />
      </Animated.View>
      
      <View style={styles.progressContainer}>
        <Animated.View
          style={[
            styles.progressBar,
            {
              width: progressAnimation,
            },
          ]}
        />
      </View>
      
      <Text style={styles.title}>Hexa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hexagonContainer: {
    width: 120,
    height: 120,
    marginBottom: 50,
  },
  hexagon: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    transform: [{ rotate: '45deg' }],
  },
  progressContainer: {
    width: width * 0.7,
    height: 3,
    backgroundColor: '#333',
    borderRadius: 5,
    marginTop: 50,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#9370DB',
    borderRadius: 5,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen; 
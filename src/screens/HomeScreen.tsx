import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PlaceholderImage from '../components/PlaceholderImage';
import { RootStackParamList } from '../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface FeatureCardProps {
  title: string;
  subtitle: string;
  color: string;
  gradientColors: [string, string];
  onPress?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, color, gradientColors, onPress }) => (
  <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
    <Text style={styles.cardSubtitle}>{subtitle}</Text>
    <Text style={styles.cardTitle}>{title}</Text>
    <View style={styles.cardImageContainer}>
      <PlaceholderImage 
        style={styles.cardImage} 
        colors={gradientColors}
      />
    </View>
  </TouchableOpacity>
);

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const features = [
    {
      title: 'Personal Logo',
      subtitle: 'AI Logo',
      color: '#4B0082',
      gradientColors: ['#6A5ACD', '#4B0082'] as [string, string],
      onPress: () => navigation.navigate('AILogo')
    },
    {
      title: 'Your Own Tattoo',
      subtitle: 'AI Tattoo',
      color: '#8B4513',
      gradientColors: ['#CD853F', '#8B4513'] as [string, string],
      onPress: () => navigation.navigate('AITattoo')
    },
    {
      title: 'Your Signature',
      subtitle: 'AI Signature',
      color: '#2F4F4F',
      gradientColors: ['#5F9EA0', '#2F4F4F'] as [string, string],
      onPress: () => navigation.navigate('AISignature')
    },
    {
      title: 'Stunning Art',
      subtitle: 'AI Art',
      color: '#800080',
      gradientColors: ['#BA55D3', '#800080'] as [string, string],
      onPress: () => navigation.navigate('AIArt')
    },
    {
      title: 'Transform Room',
      subtitle: 'AI Room Design',
      color: '#006400',
      gradientColors: ['#3CB371', '#006400'] as [string, string],
      onPress: () => navigation.navigate('AIRoom')
    },
    {
      title: 'Your Wallpaper',
      subtitle: 'AI Wallpaper',
      color: '#8B0000',
      gradientColors: ['#DC143C', '#8B0000'] as [string, string]
    },
    {
      title: 'Your Clothes',
      subtitle: 'AI Garment',
      color: '#4169E1',
      gradientColors: ['#1E90FF', '#4169E1'] as [string, string]
    },
    {
      title: 'Your Emoji',
      subtitle: 'AI Emoji',
      color: '#FF8C00',
      gradientColors: ['#FFA500', '#FF8C00'] as [string, string]
    },
    {
      title: 'Your Mockup',
      subtitle: 'AI Mockup',
      color: '#483D8B',
      gradientColors: ['#6A5ACD', '#483D8B'] as [string, string]
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <LinearGradient
            colors={['#87CEEB', '#9370DB', '#FF69B4']}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Hexa</Text>
        </View>
        <View style={styles.headerRight}>
          <View style={styles.creditContainer}>
            <Text style={styles.creditNumber}>1</Text>
            <Text style={styles.creditStar}>★</Text>
          </View>
          <View style={styles.proButton}>
            <Text style={styles.proText}>Pro</Text>
          </View>
          <TouchableOpacity 
            style={styles.settingsButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Text style={styles.settingsIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>✨</Text>
          <Text style={styles.navText}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🎨</Text>
          <Text style={styles.navText}>AI Art</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📚</Text>
          <Text style={styles.navText}>Library</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    borderRadius: 8,
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  creditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 8,
    borderRadius: 16,
    marginRight: 8,
  },
  creditNumber: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 4,
  },
  creditStar: {
    color: '#FFD700',
  },
  proButton: {
    backgroundColor: '#DAA520',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
  },
  proText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  settingsButton: {
    padding: 8,
  },
  settingsIcon: {
    fontSize: 24,
  },
  content: {
    flex: 1,
  },
  grid: {
    padding: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    aspectRatio: 0.9,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  cardSubtitle: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 12,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  cardImageContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: '60%',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#1a1a1a',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  navText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default HomeScreen; 
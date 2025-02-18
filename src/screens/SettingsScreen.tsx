import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  Settings: undefined;
  HelpCenter: undefined;
  SuggestFeature: undefined;
  TermsOfUse: undefined;
  PrivacyPolicy: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Settings'>;

interface SettingItemProps {
  icon: string;
  title: string;
  onPress?: () => void;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Text style={styles.settingIcon}>{icon}</Text>
    <Text style={styles.settingText}>{title}</Text>
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const settings = [
    {
      title: 'Share Hexa',
      icon: '🔗',
      onPress: () => {},
    },
    {
      title: 'Rate Us',
      icon: '⭐',
      onPress: () => {},
    },
    {
      title: 'Help Center',
      icon: '❓',
      onPress: () => navigation.navigate('HelpCenter'),
    },
    {
      title: 'Suggest a Feature',
      icon: '💡',
      onPress: () => navigation.navigate('SuggestFeature'),
    },
    {
      title: 'Terms of Use',
      icon: '📄',
      onPress: () => navigation.navigate('TermsOfUse'),
    },
    {
      title: 'Privacy Policy',
      icon: '🛡️',
      onPress: () => navigation.navigate('PrivacyPolicy'),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <SettingItem
            icon={settings[0].icon}
            title={settings[0].title}
            onPress={settings[0].onPress}
          />
          <SettingItem
            icon={settings[1].icon}
            title={settings[1].title}
            onPress={settings[1].onPress}
          />
        </View>

        <View style={styles.section}>
          <SettingItem
            icon={settings[2].icon}
            title={settings[2].title}
            onPress={settings[2].onPress}
          />
          <SettingItem
            icon={settings[3].icon}
            title={settings[3].title}
            onPress={settings[3].onPress}
          />
          <SettingItem
            icon={settings[4].icon}
            title={settings[4].title}
            onPress={settings[4].onPress}
          />
          <SettingItem
            icon={settings[5].icon}
            title={settings[5].title}
            onPress={settings[5].onPress}
          />
        </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  backButton: {
    padding: 8,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  section: {
    backgroundColor: '#1a1a1a',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#2a2a2a',
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 16,
  },
  settingText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingsScreen; 
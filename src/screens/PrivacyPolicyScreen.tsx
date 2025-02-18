import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const PrivacyPolicyScreen = () => {
  const navigation = useNavigation();

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

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Privacy Policy</Text>
        
        <Text style={styles.companyName}>Logos Teknoloji A.Ş.</Text>
        <Text style={styles.date}>10 February 2025</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Objective</Text>
          <Text style={styles.paragraph}>
            Logos Teknoloji A.Ş. ("Logos" or "Company"), aims to process the personal data of users in accordance with general principles of privacy and the provisions of the applicable data protection legislation to the relevant person, particularly Law on Personal Data Protection No. 6698, ("Law No: 6690") and other applicable legislation.
          </Text>

          <Text style={styles.paragraph}>
            Your personal data, which you provided/will provide to our Company and/or obtained by our Company by any means, may be processed by our Company as "Data Controller":
          </Text>

          <View style={styles.bulletPoints}>
            <Text style={styles.bulletPoint}>
              • In the context of the objective of processing your personal data and in connection with this purpose, in a limited and measured manner,
            </Text>
            <Text style={styles.bulletPoint}>
              • By maintaining the accuracy and up-to-date version of the personal data as reported or notified to our Company,
            </Text>
            <Text style={styles.bulletPoint}>
              • May be recorded, stored, preserved, reorganized and be transferred to the institutions authorized to request such personal data by law and be transferred, shared with and classified to third parties within the country or abroad under the conditions stipulated by the Law on Protection of Personal Data numbered 6698,
            </Text>
            <Text style={styles.bulletPoint}>
              • May be processed in accordance with the basic principles stipulated under the Law on Protection of Personal Data and all other processes stated under articles 5 and 6 of the Law.
            </Text>
          </View>
        </View>

        {/* Diğer bölümler buraya eklenebilir */}
      </ScrollView>
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
    padding: 16,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '600',
    marginBottom: 24,
  },
  companyName: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 8,
  },
  date: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 16,
  },
  paragraph: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    opacity: 0.9,
  },
  bulletPoints: {
    marginTop: 8,
  },
  bulletPoint: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 12,
    paddingLeft: 16,
    opacity: 0.9,
  },
});

export default PrivacyPolicyScreen; 
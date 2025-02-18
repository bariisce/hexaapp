import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const TermsOfUseScreen = () => {
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
        <Text style={styles.title}>Terms of Use</Text>
        
        <Text style={styles.paragraph}>
          By downloading or using the Hexa App (Application), these terms and conditions (Terms and Conditions) will automatically apply to you - you should make sure therefore that you read them carefully before using the Application. Application provides services to generate images from text prompts (Services). This Terms and Conditions only grants you the right to use the Application to benefit from Services within the scope defined herein. You're not allowed to copy, or modify the Application, any part of the Application, or our trademarks in any way. You're not allowed to attempt to extract the source code of the Application, and you also should not try to translate the Application into other languages, or make derivative versions. The Application itself, and all the trademarks, copyright, database rights and other intellectual property rights related to it, still belong to Superapp Labs Teknoloji A.Ş. (Superapp Labs)
        </Text>

        <Text style={styles.paragraph}>
          Superapp Labs is Committed to ensuring that the Application is as useful and efficient as possible. For that reason, we reserve the right to make changes to the Application or the charge for its services, at any time for any reason. We will never charge you for the application or Superapp Labs Services without making it crystal clear regarding what you are paying for.
        </Text>

        <Text style={styles.paragraph}>
          The Hexa app stores and processes personal data that you have provided to us, to provide our Service. It's your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone's security features and it could mean that the Hexa app won't work properly or at all.
        </Text>

        <Text style={styles.paragraph}>
          You should be aware that there are certain things that Superapp Labs will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Superapp Labs cannot take responsibility for the app not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.
        </Text>

        <Text style={styles.paragraph}>
          Along the same lines, Superapp Labs cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can't turn it on to avail the Service, Superapp Labs cannot accept responsibility.
        </Text>
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
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 24,
  },
  paragraph: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    opacity: 0.9,
  },
});

export default TermsOfUseScreen; 
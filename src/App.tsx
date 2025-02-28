import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import HelpCenterScreen from './screens/HelpCenterScreen';
import SuggestFeatureScreen from './screens/SuggestFeatureScreen';
import TermsOfUseScreen from './screens/TermsOfUseScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';
import AILogoScreen from './screens/AILogoScreen';
import AILogoCreateScreen from './screens/AILogoCreateScreen';
import AILogoStylesScreen from './screens/AILogoStylesScreen';
import AITattooScreen from './screens/AITattooScreen';
import AITattooCreateScreen from './screens/AITattooCreateScreen';
import AITattooStylesScreen from './screens/AITattooStylesScreen';
import AISignatureScreen from './screens/AISignatureScreen';
import AISignatureCreateScreen from './screens/AISignatureCreateScreen';
import AISignatureStylesScreen from './screens/AISignatureStylesScreen';
import AIArtScreen from './screens/AIArtScreen';
import AIArtCreateScreen from './screens/AIArtCreateScreen';
import AIArtStylesScreen from './screens/AIArtStylesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
          <Stack.Screen name="SuggestFeature" component={SuggestFeatureScreen} />
          <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          <Stack.Screen name="AILogo" component={AILogoScreen} />
          <Stack.Screen name="AILogoCreate" component={AILogoCreateScreen} />
          <Stack.Screen name="AILogoStyles" component={AILogoStylesScreen} />
          <Stack.Screen name="AITattoo" component={AITattooScreen} />
          <Stack.Screen name="AITattooCreate" component={AITattooCreateScreen} />
          <Stack.Screen name="AITattooStyles" component={AITattooStylesScreen} />
          <Stack.Screen name="AISignature" component={AISignatureScreen} />
          <Stack.Screen name="AISignatureCreate" component={AISignatureCreateScreen} />
          <Stack.Screen name="AISignatureStyles" component={AISignatureStylesScreen} />
          <Stack.Screen name="AIArt" component={AIArtScreen} />
          <Stack.Screen name="AIArtCreate" component={AIArtCreateScreen} />
          <Stack.Screen name="AIArtStyles" component={AIArtStylesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

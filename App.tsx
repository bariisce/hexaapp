import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HelpCenterScreen from './src/screens/HelpCenterScreen';
import SuggestFeatureScreen from './src/screens/SuggestFeatureScreen';
import TermsOfUseScreen from './src/screens/TermsOfUseScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import AILogoScreen from './src/screens/AILogoScreen';
import AILogoCreateScreen from './src/screens/AILogoCreateScreen';
import AILogoStylesScreen from './src/screens/AILogoStylesScreen';
import AITattooScreen from './src/screens/AITattooScreen';
import AITattooCreateScreen from './src/screens/AITattooCreateScreen';
import AITattooStylesScreen from './src/screens/AITattooStylesScreen';
import AISignatureScreen from './src/screens/AISignatureScreen';
import AISignatureCreateScreen from './src/screens/AISignatureCreateScreen';
import AISignatureStylesScreen from './src/screens/AISignatureStylesScreen';
import AIArtScreen from './src/screens/AIArtScreen';
import AIArtCreateScreen from './src/screens/AIArtCreateScreen';
import AIArtStylesScreen from './src/screens/AIArtStylesScreen';
import AIRoomScreen from './src/screens/AIRoomScreen';
import AIRoomCreateScreen from './src/screens/AIRoomCreateScreen';
import AIRoomStylesScreen from './src/screens/AIRoomStylesScreen';
import AIWallpaperScreen from './src/screens/AIWallpaperScreen';
import AIWallpaperCreateScreen from './src/screens/AIWallpaperCreateScreen';
import AIWallpaperStylesScreen from './src/screens/AIWallpaperStylesScreen';
import AIGarmentScreen from './src/screens/AIGarmentScreen';
import AIGarmentCreateScreen from './src/screens/AIGarmentCreateScreen';
import AIGarmentStylesScreen from './src/screens/AIGarmentStylesScreen';

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
          <Stack.Screen name="AIRoom" component={AIRoomScreen} />
          <Stack.Screen name="AIRoomCreate" component={AIRoomCreateScreen} />
          <Stack.Screen name="AIRoomStyles" component={AIRoomStylesScreen} />
          <Stack.Screen name="AIWallpaper" component={AIWallpaperScreen} />
          <Stack.Screen name="AIWallpaperCreate" component={AIWallpaperCreateScreen} />
          <Stack.Screen name="AIWallpaperStyles" component={AIWallpaperStylesScreen} />
          <Stack.Screen name="AIGarment" component={AIGarmentScreen} />
          <Stack.Screen name="AIGarmentCreate" component={AIGarmentCreateScreen} />
          <Stack.Screen name="AIGarmentStyles" component={AIGarmentStylesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
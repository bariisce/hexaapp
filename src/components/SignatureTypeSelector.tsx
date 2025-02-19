import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { aiSignatureCreateStyles as styles } from '../styles/screens';

interface SignatureTypeSelectorProps {
  selectedType: 'text' | 'image';
  onTypeSelect: (type: 'text' | 'image') => void;
}

export const SignatureTypeSelector: React.FC<SignatureTypeSelectorProps> = ({
  selectedType,
  onTypeSelect,
}) => {
  return (
    <View style={styles.typeSelector}>
      <TouchableOpacity 
        style={[
          styles.typeButton, 
          selectedType === 'text' && styles.selectedTypeButton
        ]}
        onPress={() => onTypeSelect('text')}
      >
        <Text style={styles.typeButtonIcon}>Aa</Text>
        <Text style={styles.typeButtonText}>Text</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={[
          styles.typeButton, 
          selectedType === 'image' && styles.selectedTypeButton
        ]}
        onPress={() => onTypeSelect('image')}
      >
        <Text style={styles.typeButtonIcon}>🖼️</Text>
        <Text style={styles.typeButtonText}>Image</Text>
      </TouchableOpacity>
    </View>
  );
}; 
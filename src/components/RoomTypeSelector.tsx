import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { aiRoomCreateStyles as styles } from '../styles/screens';

interface RoomTypeSelectorProps {
  selectedType: 'text' | 'image';
  onTypeSelect: (type: 'text' | 'image') => void;
}

export const RoomTypeSelector: React.FC<RoomTypeSelectorProps> = ({
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
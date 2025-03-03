import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { GarmentStyle } from '../services/firebase';
import GarmentStyleCard from './GarmentStyleCard';
import { aiGarmentCreateStyles, aiGarmentStylesStyles } from '../styles/screens';

interface GarmentStylesGridProps {
  styles: GarmentStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const GarmentStylesGrid: React.FC<GarmentStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiGarmentCreateStyles.stylesSection}>
        <View style={aiGarmentCreateStyles.stylesHeader}>
          <Text style={aiGarmentCreateStyles.stylesTitle}>Garment Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiGarmentCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiGarmentCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <GarmentStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiGarmentCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiGarmentCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiGarmentStylesStyles.grid}>
      {styles.map((style) => (
        <GarmentStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiGarmentStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiGarmentCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
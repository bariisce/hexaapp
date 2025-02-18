import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { TattooStyle } from '../services/firebase';
import TattooStyleCard from './TattooStyleCard';
import { aiTattooCreateStyles, aiTattooStylesStyles } from '../styles/screens';

interface TattooStylesGridProps {
  styles: TattooStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const TattooStylesGrid: React.FC<TattooStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiTattooCreateStyles.stylesSection}>
        <View style={aiTattooCreateStyles.stylesHeader}>
          <Text style={aiTattooCreateStyles.stylesTitle}>Tattoo Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiTattooCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiTattooCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <TattooStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiTattooCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiTattooCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiTattooStylesStyles.grid}>
      {styles.map((style) => (
        <TattooStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiTattooStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiTattooCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
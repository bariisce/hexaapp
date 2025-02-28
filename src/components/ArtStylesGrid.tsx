import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ArtStyle } from '../services/firebase';
import ArtStyleCard from './ArtStyleCard';
import { aiArtCreateStyles, aiArtStylesStyles } from '../styles/screens';

interface ArtStylesGridProps {
  styles: ArtStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const ArtStylesGrid: React.FC<ArtStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiArtCreateStyles.stylesSection}>
        <View style={aiArtCreateStyles.stylesHeader}>
          <Text style={aiArtCreateStyles.stylesTitle}>Art Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiArtCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiArtCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <ArtStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiArtCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiArtCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiArtStylesStyles.grid}>
      {styles.map((style) => (
        <ArtStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiArtStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiArtCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
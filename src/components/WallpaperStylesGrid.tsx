import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { WallpaperStyle } from '../services/firebase';
import WallpaperStyleCard from './WallpaperStyleCard';
import { aiWallpaperCreateStyles, aiWallpaperStylesStyles } from '../styles/screens';

interface WallpaperStylesGridProps {
  styles: WallpaperStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const WallpaperStylesGrid: React.FC<WallpaperStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiWallpaperCreateStyles.stylesSection}>
        <View style={aiWallpaperCreateStyles.stylesHeader}>
          <Text style={aiWallpaperCreateStyles.stylesTitle}>Wallpaper Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiWallpaperCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiWallpaperCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <WallpaperStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiWallpaperCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiWallpaperCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiWallpaperStylesStyles.grid}>
      {styles.map((style) => (
        <WallpaperStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiWallpaperStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiWallpaperCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
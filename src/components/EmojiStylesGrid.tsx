import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { EmojiStyle } from '../services/firebase';
import EmojiStyleCard from './EmojiStyleCard';
import { aiEmojiCreateStyles, aiEmojiStylesStyles } from '../styles/screens';

interface EmojiStylesGridProps {
  styles: EmojiStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const EmojiStylesGrid: React.FC<EmojiStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiEmojiCreateStyles.stylesSection}>
        <View style={aiEmojiCreateStyles.stylesHeader}>
          <Text style={aiEmojiCreateStyles.stylesTitle}>Emoji Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiEmojiCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiEmojiCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <EmojiStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiEmojiCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiEmojiCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiEmojiStylesStyles.grid}>
      {styles.map((style) => (
        <EmojiStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiEmojiStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiEmojiCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MockupStyle } from '../services/firebase';
import MockupStyleCard from './MockupStyleCard';
import { aiMockupCreateStyles, aiMockupStylesStyles } from '../styles/screens';

interface MockupStylesGridProps {
  styles: MockupStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const MockupStylesGrid: React.FC<MockupStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiMockupCreateStyles.stylesSection}>
        <View style={aiMockupCreateStyles.stylesHeader}>
          <Text style={aiMockupCreateStyles.stylesTitle}>Mockup Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiMockupCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiMockupCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <MockupStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiMockupCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiMockupCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiMockupStylesStyles.grid}>
      {styles.map((style) => (
        <MockupStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiMockupStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiMockupCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
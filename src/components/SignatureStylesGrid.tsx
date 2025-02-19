import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SignatureStyle } from '../services/firebase';
import SignatureStyleCard from './SignatureStyleCard';
import { aiSignatureCreateStyles, aiSignatureStylesStyles } from '../styles/screens';

interface SignatureStylesGridProps {
  styles: SignatureStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const SignatureStylesGrid: React.FC<SignatureStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiSignatureCreateStyles.stylesSection}>
        <View style={aiSignatureCreateStyles.stylesHeader}>
          <Text style={aiSignatureCreateStyles.stylesTitle}>Signature Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiSignatureCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiSignatureCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <SignatureStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiSignatureCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiSignatureCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiSignatureStylesStyles.grid}>
      {styles.map((style) => (
        <SignatureStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiSignatureStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiSignatureCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
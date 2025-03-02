import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { RoomStyle } from '../services/firebase';
import RoomStyleCard from './RoomStyleCard';
import { aiRoomCreateStyles, aiRoomStylesStyles } from '../styles/screens';

interface RoomStylesGridProps {
  styles: RoomStyle[];
  selectedStyle: string | null;
  onStyleSelect: (styleId: string) => void;
  onSeeAllPress?: () => void;
  isPreview?: boolean;
}

export const RoomStylesGrid: React.FC<RoomStylesGridProps> = ({
  styles,
  selectedStyle,
  onStyleSelect,
  onSeeAllPress,
  isPreview = false,
}) => {
  if (isPreview) {
    return (
      <View style={aiRoomCreateStyles.stylesSection}>
        <View style={aiRoomCreateStyles.stylesHeader}>
          <Text style={aiRoomCreateStyles.stylesTitle}>Room Styles</Text>
          {onSeeAllPress && (
            <TouchableOpacity onPress={onSeeAllPress}>
              <Text style={aiRoomCreateStyles.seeAllText}>See all →</Text>
            </TouchableOpacity>
          )}
        </View>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          style={aiRoomCreateStyles.stylesScroll}
        >
          {styles.map((style) => (
            <RoomStyleCard
              key={style.id}
              {...style}
              containerStyle={{
                ...aiRoomCreateStyles.styleCard,
                ...(selectedStyle === style.id ? aiRoomCreateStyles.selectedStyleCard : {})
              }}
              onPress={() => onStyleSelect(style.id)}
            />
          ))}
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={aiRoomStylesStyles.grid}>
      {styles.map((style) => (
        <RoomStyleCard
          key={style.id}
          {...style}
          containerStyle={{
            ...aiRoomStylesStyles.styleCard,
            ...(selectedStyle === style.id ? aiRoomCreateStyles.selectedStyleCard : {})
          }}
          onPress={() => onStyleSelect(style.id)}
        />
      ))}
    </View>
  );
}; 
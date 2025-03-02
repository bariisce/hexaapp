import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { roomStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface RoomStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/room/nostyle.jpg');
    case 'bathroom.jpg': return require('../assets/room/bathroom.jpg');
    case 'bedroom.jpg': return require('../assets/room/bedroom.jpg');
    case 'coffeeshop.jpg': return require('../assets/room/coffeeshop.jpg');
    case 'diningroom.jpg': return require('../assets/room/diningroom.jpg');
    case 'dressingroom.jpg': return require('../assets/room/dressingroom.jpg');
    case 'garden.jpg': return require('../assets/room/garden.jpg');
    case 'gym.jpg': return require('../assets/room/gym.jpg');
    case 'homeoffice.jpg': return require('../assets/room/homeoffice.jpg');
    case 'kitchen.jpg': return require('../assets/room/kitchen.jpg');
    case 'livingroom.jpg': return require('../assets/room/livingroom.jpg');
    case 'office.jpg': return require('../assets/room/office.jpg');
    case 'pool.jpg': return require('../assets/room/pool.jpg');
    case 'restaurant.jpg': return require('../assets/room/restaurant.jpg');
    case 'studyroom.jpg': return require('../assets/room/studyroom.jpg');
    case 'toilet.jpg': return require('../assets/room/toilet.jpg');
    default: return null;
  }
};

const RoomStyleCard: React.FC<RoomStyleCardProps> = ({
  name,
  imageUrl,
  onPress,
  containerStyle,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const imageSource = getImageSource(imageUrl);

  return (
    <TouchableOpacity 
      style={[styles.card, containerStyle]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={COLORS.primary} />
          </View>
        )}
        {hasError || !imageSource ? (
          <PlaceholderImage style={styles.image} />
        ) : (
          <Image 
            source={imageSource}
            style={styles.image}
            resizeMode="cover"
            onLoadStart={() => setIsLoading(true)}
            onLoadEnd={() => setIsLoading(false)}
            onError={() => {
              setHasError(true);
              setIsLoading(false);
              console.error('Görsel yüklenirken hata:', imageUrl);
            }}
          />
        )}
      </View>
      <Text style={styles.name} numberOfLines={1}>{name}</Text>
    </TouchableOpacity>
  );
};

export default RoomStyleCard; 
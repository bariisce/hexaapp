import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { mockupStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface MockupStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/mockup/nostyle.jpg');
    case 'arm.png': return require('../assets/mockup/arm.png');
    case 'back.jpg': return require('../assets/mockup/back.jpg');
    case 'beach.jpg': return require('../assets/mockup/beach.jpg');
    case 'beauty.jpg': return require('../assets/mockup/beauty.jpg');
    case 'business.jpg': return require('../assets/mockup/business.jpg');
    case 'ethnic.jpg': return require('../assets/mockup/ethnic.jpg');
    case 'event.jpg': return require('../assets/mockup/event.jpg');
    case 'food.png': return require('../assets/mockup/food.png');
    case 'forearm.jpg': return require('../assets/mockup/forearm.jpg');
    case 'gaming.png': return require('../assets/mockup/gaming.png');
    case 'gym.jpg': return require('../assets/mockup/gym.jpg');
    case 'leg.png': return require('../assets/mockup/leg.png');
    case 'lifestyle.jpg': return require('../assets/mockup/ethnic.jpg');
    case 'neck.jpg': return require('../assets/mockup/neck.jpg');
    case 'office.jpg': return require('../assets/mockup/office.jpg');
    case 'outdoor.png': return require('../assets/mockup/outdoor.png');
    case 'print.jpg': return require('../assets/mockup/print.jpg');
    case 'retail.jpg': return require('../assets/mockup/retail.jpg');
    case 'shoulder.jpg': return require('../assets/mockup/shoulder.jpg');
    case 'sports.jpg': return require('../assets/mockup/sports.jpg');
    case 'streetstyle.jpg': return require('../assets/mockup/streetstyle.jpg');
    case 'studio.jpg': return require('../assets/mockup/studio.jpg');
    case 'tech.jpg': return require('../assets/mockup/tech.jpg');
    default: return null;
  }
};

const MockupStyleCard: React.FC<MockupStyleCardProps> = ({
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

export default MockupStyleCard; 
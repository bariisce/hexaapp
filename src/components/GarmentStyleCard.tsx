import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { garmentStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface GarmentStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/garment/nostyle.jpg');
    case 'business.jpg': return require('../assets/garment/business.jpg');
    case 'cosplay.jpg': return require('../assets/garment/cosplay.jpg');
    case 'cultural.jpg': return require('../assets/garment/cultural.jpg');
    case 'cyberpunk.jpg': return require('../assets/garment/cyberpunk.jpg');
    case 'jersey.png': return require('../assets/garment/jersey.png');
    case 'minimalist.jpg': return require('../assets/garment/minimalist.jpg');
    case 'sporty.jpg': return require('../assets/garment/sporty.jpg');
    case 'steampunk.jpg': return require('../assets/garment/steampunk.jpg');
    case 'streetwear.jpg': return require('../assets/garment/streetwear.jpg');
    case 'vintagefashion.jpg': return require('../assets/garment/vintagefashion.jpg');
    default: return null;
  }
};

const GarmentStyleCard: React.FC<GarmentStyleCardProps> = ({
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

export default GarmentStyleCard; 
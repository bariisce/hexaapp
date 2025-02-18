import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { logoStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface LogoStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/logo/nostyle.jpg');
    case 'monogram.jpg': return require('../assets/logo/monogram.jpg');
    case 'gaming.png': return require('../assets/logo/gaming.png');
    case 'mascot.png': return require('../assets/logo/mascot.png');
    case 'vintage.png': return require('../assets/logo/vintage.png');
    case 'modern.png': return require('../assets/logo/modern.png');
    case 'abstract.jpg': return require('../assets/logo/abstract.jpg');
    case 'geometric.jpg': return require('../assets/logo/geometric.jpg');
    case 'luxury.jpg': return require('../assets/logo/luxury.jpg');
    case 'sketch.png': return require('../assets/logo/sketch.png');
    case 'illustration.jpg': return require('../assets/logo/illustration.jpg');
    case 'symbolic.png': return require('../assets/logo/symbolic.png');
    case 'minimalist.png': return require('../assets/logo/minimalist.png');
    case 'cartoon.jpg': return require('../assets/logo/cartoon.jpg');
    case 'classic.png': return require('../assets/logo/classic.png');
    case 'futuristic.jpg': return require('../assets/logo/futuristic.jpg');
    case 'grunge.jpg': return require('../assets/logo/grunge.jpg');
    default: return null;
  }
};

const LogoStyleCard: React.FC<LogoStyleCardProps> = ({
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

export default LogoStyleCard; 
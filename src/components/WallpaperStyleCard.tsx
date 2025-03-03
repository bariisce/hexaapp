import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { wallpaperStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface WallpaperStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/wallpaper/nostyle.jpg');
    case 'animewp.jpg': return require('../assets/wallpaper/animewp.jpg');
    case 'digitalartwp.jpg': return require('../assets/wallpaper/digitalartwp.jpg');
    case 'fictionalwp.jpg': return require('../assets/wallpaper/fictionalwp.jpg');
    case 'minimalistwp.jpg': return require('../assets/wallpaper/minimalistwp.jpg');
    case 'graffitiwp.jpg': return require('../assets/wallpaper/graffitiwp.jpg');
    case 'pastelwp.jpg': return require('../assets/wallpaper/pastelwp.jpg');
    case 'realisticwp.jpg': return require('../assets/wallpaper/realisticwp.jpg');
    case 'posterswp.jpg': return require('../assets/wallpaper/posterswp.jpg');
    case 'watercolorwp.jpg': return require('../assets/wallpaper/watercolorwp.jpg');
    default: return null;
  }
};

const WallpaperStyleCard: React.FC<WallpaperStyleCardProps> = ({
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

export default WallpaperStyleCard; 
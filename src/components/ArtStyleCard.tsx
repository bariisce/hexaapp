import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { artStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface ArtStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/art/nostyle.jpg');
    case 'abstractart.jpg': return require('../assets/art/abstractart.jpg');
    case 'albumcoverart.jpg': return require('../assets/art/albumcoverart.jpg');
    case 'japaneseart.jpg': return require('../assets/art/japaneseart.jpg');
    case 'minimalistart.jpg': return require('../assets/art/minimalistart.jpg');
    case 'animeart.jpg': return require('../assets/art/animeart.jpg');
    case 'cosmosart.jpg': return require('../assets/art/cosmosart.jpg');
    case 'realismart.jpg': return require('../assets/art/realismart.jpg');
    case 'creepyart.jpg': return require('../assets/art/creepyart.jpg');
    case 'cyberpunkart.jpg': return require('../assets/art/cyberpunkart.jpg');
    case 'floralart.jpg': return require('../assets/art/floralart.jpg');
    case 'hotart.jpg': return require('../assets/art/hotart.jpg');
    case 'hyperrealisticart.jpg': return require('../assets/art/hyperrealisticart.jpg');
    case 'fantasyart.jpg': return require('../assets/art/fantasyart.jpg');
    case 'illustrationart.jpg': return require('../assets/art/illustrationart.jpg');
    case 'popart.jpg': return require('../assets/art/popart.jpg');
    case 'kpopart.jpg': return require('../assets/art/kpopart.jpg');
    case 'scifiart.jpg': return require('../assets/art/scifiart.jpg');
    case 'surrealismart.jpg': return require('../assets/art/surrealismart.jpg');
    case 'vaporwaveart.jpg': return require('../assets/art/vaporwaveart.jpg');
    case 'vintageart.jpg': return require('../assets/art/vintageart.jpg');
    case 'wildlifeart.jpg': return require('../assets/art/wildlifeart.jpg');
    default: return null;
  }
};

const ArtStyleCard: React.FC<ArtStyleCardProps> = ({
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

export default ArtStyleCard; 
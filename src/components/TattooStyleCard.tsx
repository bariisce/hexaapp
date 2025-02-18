import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { tattooStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface TattooStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/tattoo/nostyle.jpg');
    case 'traditionaltattoo.png': return require('../assets/tattoo/traditionaltattoo.png');
    case 'tribaltattoo.jpg': return require('../assets/tattoo/tribaltattoo.jpg');
    case 'japanesetattoo.jpg': return require('../assets/tattoo/japanesetattoo.jpg');
    case 'minimalisttattoo.png': return require('../assets/tattoo/minimalisttattoo.png');
    case 'neotraditionaltattoo.jpg': return require('../assets/tattoo/neotraditionaltattoo.jpg');
    case 'watercolortattoo.jpg': return require('../assets/tattoo/watercolortattoo.jpg');
    case 'realistictattoo.png': return require('../assets/tattoo/realistictattoo.png');
    case 'artdecotattoo.jpg': return require('../assets/tattoo/artdecotattoo.jpg');
    case 'biomechnaicaltattoo.jpg': return require('../assets/tattoo/biomechnaicaltattoo.jpg');
    case 'cubismtattoo.jpg': return require('../assets/tattoo/cubismtattoo.jpg');
    case 'disneytattoo.jpg': return require('../assets/tattoo/disneytattoo.jpg');
    case 'expressionisttattoo.jpg': return require('../assets/tattoo/expressionisttattoo.jpg');
    case 'fantasytattoo.jpg': return require('../assets/tattoo/fantasytattoo.jpg');
    case 'graffititattoo.jpg': return require('../assets/tattoo/graffititattoo.jpg');
    case 'poparttattoo.jpg': return require('../assets/tattoo/poparttattoo.jpg');
    case 'retrotattoo.jpg': return require('../assets/tattoo/retrotattoo.jpg');
    case 'steampunktattoo.jpg': return require('../assets/tattoo/steampunktattoo.jpg');
    case 'surrealisttattoo.jpg': return require('../assets/tattoo/surrealisttattoo.jpg');
    case 'trashpolkatattoo.jpg': return require('../assets/tattoo/trashpolkatattoo.jpg');
    default: return null;
  }
};

const TattooStyleCard: React.FC<TattooStyleCardProps> = ({
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

export default TattooStyleCard; 
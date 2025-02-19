import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ViewStyle, ActivityIndicator } from 'react-native';
import { signatureStyleCardStyles as styles } from '../styles/components';
import { COLORS } from '../constants/theme';
import PlaceholderImage from './PlaceholderImage';

interface SignatureStyleCardProps {
  id: string;
  name: string;
  imageUrl: string;
  onPress?: () => void;
  containerStyle?: ViewStyle;
}

const getImageSource = (imageName: string) => {
  switch(imageName) {
    case 'nostyle.jpg': return require('../assets/signature/nostyle.jpg');
    case 'classicsign.jpg': return require('../assets/signature/classicsign.jpg');
    case 'continuousflowsign.jpg': return require('../assets/signature/continuousflowsign.jpg');
    case 'dynamicstrokesign.jpg': return require('../assets/signature/dynamicstrokesign.jpg');
    case 'elegantsign.png': return require('../assets/signature/elegantsign.png');
    case 'flourishsign.png': return require('../assets/signature/flourishsign.png');
    case 'minimalistsign.jpg': return require('../assets/signature/minimalistsign.jpg');
    case 'modernsign.jpg': return require('../assets/signature/modernsign.jpg');
    case 'underlinesign.jpg': return require('../assets/signature/underlinesign.jpg');
    case 'monogramsign.jpg': return require('../assets/signature/monogramsign.jpg');
    default: return null;
  }
};

const SignatureStyleCard: React.FC<SignatureStyleCardProps> = ({
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

export default SignatureStyleCard; 
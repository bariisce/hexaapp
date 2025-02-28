import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { artStylesService, ArtStyle } from '../services/firebase';

export const useArtStyles = (previewCount?: number) => {
  const [artStyles, setArtStyles] = useState<ArtStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadArtStyles();
  }, []);

  const loadArtStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await artStylesService.getAllStyles();
      setArtStyles(previewCount ? styles.slice(0, previewCount) : styles);
    } catch (err) {
      const errorMessage = 'İmza stillerini yüklerken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    artStyles,
    isLoading,
    error,
    refreshStyles: loadArtStyles
  };
}; 
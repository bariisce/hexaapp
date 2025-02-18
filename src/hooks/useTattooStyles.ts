import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { tattooStylesService, TattooStyle } from '../services/firebase';

export const useTattooStyles = (previewCount?: number) => {
  const [tattooStyles, setTattooStyles] = useState<TattooStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadTattooStyles();
  }, []);

  const loadTattooStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await tattooStylesService.getAllStyles();
      setTattooStyles(previewCount ? styles.slice(0, previewCount) : styles);
    } catch (err) {
      const errorMessage = 'Dövme stillerini yüklerken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    tattooStyles,
    isLoading,
    error,
    refreshStyles: loadTattooStyles
  };
}; 
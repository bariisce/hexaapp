import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { garmentStylesService, GarmentStyle } from '../services/firebase';

export const useGarmentStyles = (previewCount?: number) => {
  const [garmentStyles, setGarmentStyles] = useState<GarmentStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadGarmentStyles();
  }, []);

  const loadGarmentStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await garmentStylesService.getAllStyles();
      setGarmentStyles(previewCount ? styles.slice(0, previewCount) : styles);
    } catch (err) {
      const errorMessage = 'Giysi stillerini yüklerken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    garmentStyles,
    isLoading,
    error,
    refreshStyles: loadGarmentStyles
  };
}; 
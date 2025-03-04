import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { mockupStylesService, MockupStyle } from '../services/firebase';

export const useMockupStyles = (previewCount?: number) => {
  const [mockupStyles, setMockupStyles] = useState<MockupStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMockupStyles();
  }, []);

  const loadMockupStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await mockupStylesService.getAllStyles();
      setMockupStyles(previewCount ? styles.slice(0, previewCount) : styles);
    } catch (err) {
      const errorMessage = 'Mockup stillerini yüklerken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mockupStyles,
    isLoading,
    error,
    refreshStyles: loadMockupStyles
  };
}; 
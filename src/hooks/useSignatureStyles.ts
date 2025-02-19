import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { signatureStylesService, SignatureStyle } from '../services/firebase';

export const useSignatureStyles = (previewCount?: number) => {
  const [signatureStyles, setSignatureStyles] = useState<SignatureStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadSignatureStyles();
  }, []);

  const loadSignatureStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await signatureStylesService.getAllStyles();
      setSignatureStyles(previewCount ? styles.slice(0, previewCount) : styles);
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
    signatureStyles,
    isLoading,
    error,
    refreshStyles: loadSignatureStyles
  };
}; 
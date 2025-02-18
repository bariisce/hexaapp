import { useState } from 'react';
import { Alert } from 'react-native';
import { tattooRequestsService } from '../services/firebase';

interface CreateTattooRequest {
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
}

export const useTattooRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async ({ prompt, selectedStyle, type }: CreateTattooRequest) => {
    if (!prompt) {
      Alert.alert('Hata', 'Lütfen bir prompt girin');
      return false;
    }

    if (!selectedStyle) {
      Alert.alert('Hata', 'Lütfen bir dövme stili seçin');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      await tattooRequestsService.createRequest({
        prompt,
        selectedStyle,
        type,
      });
      Alert.alert('Başarılı', 'Dövme isteğiniz başarıyla oluşturuldu');
      return true;
    } catch (err) {
      const errorMessage = 'Dövme isteği oluşturulurken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createRequest,
    isLoading,
    error
  };
}; 
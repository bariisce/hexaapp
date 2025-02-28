import { useState } from 'react';
import { Alert } from 'react-native';
import { artRequestsService } from '../services/firebase';

interface CreateArtRequest {
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
}

export const useArtRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async ({ prompt, selectedStyle, type }: CreateArtRequest) => {
    if (!prompt) {
      Alert.alert('Hata', 'Lütfen bir prompt girin');
      return false;
    }

    if (!selectedStyle) {
      Alert.alert('Hata', 'Lütfen bir art stili seçin');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      await artRequestsService.createRequest({
        prompt,
        selectedStyle,
        type,
      });
      Alert.alert('Başarılı', 'Art isteğiniz başarıyla oluşturuldu');
      return true;
    } catch (err) {
      const errorMessage = 'Art isteği oluşturulurken hata oluştu';
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
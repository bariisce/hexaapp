import { useState } from 'react';
import { Alert } from 'react-native';
import { mockupRequestsService } from '../services/firebase';

interface CreateMockupRequest {
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
}

export const useMockupRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async ({ prompt, selectedStyle, type }: CreateMockupRequest) => {
    if (!prompt) {
      Alert.alert('Hata', 'Lütfen bir prompt girin');
      return false;
    }

    if (!selectedStyle) {
      Alert.alert('Hata', 'Lütfen bir mockup stili seçin');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      await mockupRequestsService.createRequest({
        prompt,
        selectedStyle,
        type,
      });
      Alert.alert('Başarılı', 'Mockup isteğiniz başarıyla oluşturuldu');
      return true;
    } catch (err) {
      const errorMessage = 'Mockup isteği oluşturulurken hata oluştu';
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
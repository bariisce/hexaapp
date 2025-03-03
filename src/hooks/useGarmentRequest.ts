import { useState } from 'react';
import { Alert } from 'react-native';
import { garmentRequestsService } from '../services/firebase';

interface CreateGarmentRequest {
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
}

export const useGarmentRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async ({ prompt, selectedStyle, type }: CreateGarmentRequest) => {
    if (!prompt) {
      Alert.alert('Hata', 'Lütfen bir prompt girin');
      return false;
    }

    if (!selectedStyle) {
      Alert.alert('Hata', 'Lütfen bir oda stili seçin');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      await garmentRequestsService.createRequest({
        prompt,
        selectedStyle,
        type,
      });
      Alert.alert('Başarılı', 'Oda isteğiniz başarıyla oluşturuldu');
      return true;
    } catch (err) {
      const errorMessage = 'Oda isteği oluşturulurken hata oluştu';
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
import { useState } from 'react';
import { Alert } from 'react-native';
import { signatureRequestsService } from '../services/firebase';

interface CreateSignatureRequest {
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
}

export const useSignatureRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async ({ prompt, selectedStyle, type }: CreateSignatureRequest) => {
    if (!prompt) {
      Alert.alert('Hata', 'Lütfen bir prompt girin');
      return false;
    }

    if (!selectedStyle) {
      Alert.alert('Hata', 'Lütfen bir imza stili seçin');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      await signatureRequestsService.createRequest({
        prompt,
        selectedStyle,
        type,
      });
      Alert.alert('Başarılı', 'İmza isteğiniz başarıyla oluşturuldu');
      return true;
    } catch (err) {
      const errorMessage = 'İmza isteği oluşturulurken hata oluştu';
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
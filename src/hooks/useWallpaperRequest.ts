import { useState } from 'react';
import { Alert } from 'react-native';
import { wallpaperRequestsService } from '../services/firebase';

interface CreateWallpaperRequest {
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
}

export const useWallpaperRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRequest = async ({ prompt, selectedStyle, type }: CreateWallpaperRequest) => {
    if (!prompt) {
      Alert.alert('Hata', 'Lütfen bir prompt girin');
      return false;
    }

    if (!selectedStyle) {
      Alert.alert('Hata', 'Lütfen bir wallpaper stili seçin');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      await wallpaperRequestsService.createRequest({
        prompt,
        selectedStyle,
        type,
      });
      Alert.alert('Başarılı', 'Wallpaper isteğiniz başarıyla oluşturuldu');
      return true;
    } catch (err) {
      const errorMessage = 'Wallpaper isteği oluşturulurken hata oluştu';
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
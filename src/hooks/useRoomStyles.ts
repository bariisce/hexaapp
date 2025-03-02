import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { roomStylesService, RoomStyle } from '../services/firebase';

export const useRoomStyles = (previewCount?: number) => {
  const [roomStyles, setRoomStyles] = useState<RoomStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadRoomStyles();
  }, []);

  const loadRoomStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await roomStylesService.getAllStyles();
      setRoomStyles(previewCount ? styles.slice(0, previewCount) : styles);
    } catch (err) {
      const errorMessage = 'Oda stillerini yüklerken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    roomStyles,
    isLoading,
    error,
    refreshStyles: loadRoomStyles
  };
}; 
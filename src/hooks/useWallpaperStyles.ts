import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { wallpaperStylesService, WallpaperStyle } from '../services/firebase';

export const useWallpaperStyles = (previewCount?: number) => {
  const [wallpaperStyles, setWallpaperStyles] = useState<WallpaperStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadWallpaperStyles();
  }, []);

  const loadWallpaperStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await wallpaperStylesService.getAllStyles();
      setWallpaperStyles(previewCount ? styles.slice(0, previewCount) : styles);
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
    wallpaperStyles,
    isLoading,
    error,
    refreshStyles: loadWallpaperStyles
  };
}; 
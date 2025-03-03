import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { emojiStylesService, EmojiStyle } from '../services/firebase';

export const useEmojiStyles = (previewCount?: number) => {
  const [emojiStyles, setEmojiStyles] = useState<EmojiStyle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadEmojiStyles();
  }, []);

  const loadEmojiStyles = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const styles = await emojiStylesService.getAllStyles();
      setEmojiStyles(previewCount ? styles.slice(0, previewCount) : styles);
    } catch (err) {
      const errorMessage = 'Emoji stillerini yüklerken hata oluştu';
      console.error(errorMessage, err);
      setError(errorMessage);
      Alert.alert('Hata', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    emojiStyles,
    isLoading,
    error,
    refreshStyles: loadEmojiStyles
  };
}; 
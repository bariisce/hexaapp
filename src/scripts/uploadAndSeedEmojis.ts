import seedEmojiStyles from './seedEmojiStyles';

const uploadAndSeedEmojis = async () => {
  try {
    console.log('Emoji stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedEmojiStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedEmojis(); 
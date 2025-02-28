import seedArtStyles from './seedArtStyles';

const uploadAndSeedArts = async () => {
  try {
    console.log('Dövme stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedArtStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedArts(); 
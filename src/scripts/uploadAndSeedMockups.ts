import seedMockupStyles from './seedMockupStyles';

const uploadAndSeedMockups = async () => {
  try {
    console.log('Mockup stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedMockupStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedMockups(); 
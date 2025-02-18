import seedTattooStyles from './seedTattooStyles';

const uploadAndSeedTattoos = async () => {
  try {
    console.log('Dövme stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedTattooStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedTattoos(); 
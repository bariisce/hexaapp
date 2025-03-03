import seedGarmentStyles from './seedGarmentStyles';

const uploadAndSeedGarments = async () => {
  try {
    console.log('Giysi stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedGarmentStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedGarments(); 
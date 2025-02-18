import seedLogoStyles from './seedLogoStyles';

const uploadAndSeedLogos = async () => {
  try {
    console.log('Logo stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedLogoStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedLogos(); 
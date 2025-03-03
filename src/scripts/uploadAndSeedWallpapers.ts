import seedWallpaperStyles from './seedWallpaperStyles';

const uploadAndSeedWallpapers = async () => {
  try {
    console.log('Oda stillerini Firestore\'a yükleme işlemi başlıyor...');
    await seedWallpaperStyles();
    console.log('İşlem başarıyla tamamlandı!');
    process.exit(0);
  } catch (error) {
    console.error('Hata:', error);
    process.exit(1);
  }
};

// Script'i çalıştır
uploadAndSeedWallpapers(); 
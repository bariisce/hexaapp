import { wallpaperStylesService } from '../services/firebase';

const wallpaperStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic art designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Anime',
    imageUrl: 'animewp.jpg',
    description: 'Bold lines, bright colors, and classic japanese anime motifs.',
    category: 'Abstract',
  },
  {
    name: 'Digital Art',
    imageUrl: 'digitalartwp.jpg',
    description: 'Bold black patterns inspired by indigenous digital art album.',
    category: 'digitalart',
  },
  {
    name: 'Fictional',
    imageUrl: 'fictionalwp.jpg',
    description: 'Traditional Fictional motifs with bold colors and flowing designs.',
    category: 'Fictional',
  },
  {
    name: 'Graffiti',
    imageUrl: 'graffitiwp.jpg',
    description: 'Simple, clean lines and graffiti designs that focus on essential elements.',
    category: 'Modern',
  },
  {
    name: 'Minimalist',
    imageUrl: 'minimalistwp.jpg',
    description: 'Modern take on minimalist style with more detail and color options.',
    category: 'Minimalist',
  },
  {
    name: 'Pastel',
    imageUrl: 'pastelwp.jpg',
    description: 'Soft, colorful designs that mimic pastel painting techniques.',
    category: 'pastel',
  },
  {
    name: 'Posters',
    imageUrl: 'posterswp.jpg',
    description: 'Highly detailed designs that look like photographs or realistic drawings.',
    category: 'posters',
  },
  {
    name: 'Realistic',
    imageUrl: 'realisticwp.jpg',
    description: 'Crazy and luxurious designs inspired by the realistic movement.',
    category: 'realistic',
  },
  {
    name: 'Water Color',
    imageUrl: 'watercolorwp.jpg',
    description: 'Mechanical and organic designs that blend with water color.',
    category: 'Modern',
  }
];

const seedWallpaperStyles = async () => {
  try {
    console.log('Wallpaper stillerini yükleme başladı...');
    
    for (const style of wallpaperStyles) {
      await wallpaperStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm Wallpaper stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Wallpaper stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedWallpaperStyles; 
import { garmentStylesService } from '../services/firebase';

const garmentStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic art designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Business',
    imageUrl: 'business.jpg',
    description: 'Bold lines, bright colors, and classic business motifs.',
    category: 'Business',
  },
  {
    name: 'Cosplay',
    imageUrl: 'cosplay.jpg',
    description: 'Bold black patterns inspired by indigenous cosplay album.',
    category: 'digitalart',
  },
  {
    name: 'Cultural',
    imageUrl: 'cultural.jpg',
    description: 'Traditional cultural motifs with bold colors and flowing designs.',
    category: 'Cultural',
  },
  {
    name: 'Cyberpunk',
    imageUrl: 'cyberpunk.jpg',
    description: 'Simple, clean lines and cyberpunk designs that focus on essential elements.',
    category: 'Modern',
  },
  {
    name: 'Minimalist',
    imageUrl: 'minimalist.jpg',
    description: 'Modern take on minimalist style with more detail and color options.',
    category: 'Minimalist',
  },
  {
    name: 'Jersey',
    imageUrl: 'jersey.png',
    description: 'Soft, colorful designs that mimic jersey painting techniques.',
    category: 'Jersey',
  },
  {
    name: 'Sporty',
    imageUrl: 'sporty.jpg',
    description: 'Highly detailed designs that look like photographs or realistic drawings.',
    category: 'Sporty',
  },
  {
    name: 'Steampunk',
    imageUrl: 'steampunk.jpg',
    description: 'Crazy and luxurious designs inspired by the steampunk movement.',
    category: 'Steampunk',
  },
  {
    name: 'Street Wear',
    imageUrl: 'streetwear.jpg',
    description: 'Mechanical and organic designs that blend with street wear.',
    category: 'Modern',
  },
  {
    name: 'Vintage Fashion',
    imageUrl: 'vintagefashion.jpg',
    description: 'Mechanical and organic designs that blend with vintage fashion.',
    category: 'Modern',
  }
];

const seedGarmentStyles = async () => {
  try {
    console.log('Giysi stillerini yükleme başladı...');
    
    for (const style of garmentStyles) {
      await garmentStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm Giysi stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Giysi stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedGarmentStyles; 
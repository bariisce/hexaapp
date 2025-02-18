import { tattooStylesService } from '../services/firebase';

const tattooStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic tattoo designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Traditional',
    imageUrl: 'traditionaltattoo.png',
    description: 'Bold lines, bright colors, and classic American tattoo motifs.',
    category: 'Classic',
  },
  {
    name: 'Tribal',
    imageUrl: 'tribaltattoo.jpg',
    description: 'Bold black patterns inspired by indigenous tattoo traditions.',
    category: 'Traditional',
  },
  {
    name: 'Japanese',
    imageUrl: 'japanesetattoo.jpg',
    description: 'Traditional Japanese motifs with bold colors and flowing designs.',
    category: 'Traditional',
  },
  {
    name: 'Minimalist',
    imageUrl: 'minimalisttattoo.png',
    description: 'Simple, clean lines and minimalist designs that focus on essential elements.',
    category: 'Modern',
  },
  {
    name: 'Neo Traditional',
    imageUrl: 'neotraditionaltattoo.jpg',
    description: 'Modern take on traditional style with more detail and color options.',
    category: 'Modern',
  },
  {
    name: 'Watercolor',
    imageUrl: 'watercolortattoo.jpg',
    description: 'Soft, colorful designs that mimic watercolor painting techniques.',
    category: 'Artistic',
  },
  {
    name: 'Realistic',
    imageUrl: 'realistictattoo.png',
    description: 'Highly detailed designs that look like photographs or realistic drawings.',
    category: 'Artistic',
  },
  {
    name: 'Art Deco',
    imageUrl: 'artdecotattoo.jpg',
    description: 'Geometric and luxurious designs inspired by the Art Deco movement.',
    category: 'Artistic',
  },
  {
    name: 'Biomechanical',
    imageUrl: 'biomechnaicaltattoo.jpg',
    description: 'Mechanical and organic designs that blend with human anatomy.',
    category: 'Modern',
  },
  {
    name: 'Cubism',
    imageUrl: 'cubismtattoo.jpg',
    description: 'Abstract designs inspired by the Cubist art movement.',
    category: 'Artistic',
  },
  {
    name: 'Disney',
    imageUrl: 'disneytattoo.jpg',
    description: 'Whimsical designs inspired by Disney characters and stories.',
    category: 'Illustrative',
  },
  {
    name: 'Expressionist',
    imageUrl: 'expressionisttattoo.jpg',
    description: 'Emotional and intense designs with distorted forms.',
    category: 'Artistic',
  },
  {
    name: 'Fantasy',
    imageUrl: 'fantasytattoo.jpg',
    description: 'Magical and mythical designs from fantasy worlds.',
    category: 'Illustrative',
  },
  {
    name: 'Graffiti',
    imageUrl: 'graffititattoo.jpg',
    description: 'Urban street art inspired designs with bold colors.',
    category: 'Modern',
  },
  {
    name: 'Pop Art',
    imageUrl: 'poparttattoo.jpg',
    description: 'Bold, colorful designs inspired by pop art movement with comic book style elements.',
    category: 'Modern',
  },
  {
    name: 'Retro',
    imageUrl: 'retrotattoo.jpg',
    description: 'Vintage-inspired designs from various decades.',
    category: 'Classic',
  },
  {
    name: 'Steampunk',
    imageUrl: 'steampunktattoo.jpg',
    description: 'Victorian-era mechanical and industrial designs.',
    category: 'Fantasy',
  },
  {
    name: 'Surrealist',
    imageUrl: 'surrealisttattoo.jpg',
    description: 'Dreamlike and bizarre designs that defy reality.',
    category: 'Artistic',
  },
  {
    name: 'Trash Polka',
    imageUrl: 'trashpolkatattoo.jpg',
    description: 'Abstract designs combining realism with chaotic elements.',
    category: 'Modern',
  }
];

const seedTattooStyles = async () => {
  try {
    console.log('Dövme stillerini yükleme başladı...');
    
    for (const style of tattooStyles) {
      await tattooStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm dövme stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Dövme stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedTattooStyles; 
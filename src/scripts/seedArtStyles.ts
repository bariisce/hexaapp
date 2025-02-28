import { artStylesService } from '../services/firebase';

const artStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic art designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Abstract',
    imageUrl: 'abstractart.jpg',
    description: 'Bold lines, bright colors, and classic American art motifs.',
    category: 'Abstract',
  },
  {
    name: 'Album Cover Art',
    imageUrl: 'albumcoverart.jpg',
    description: 'Bold black patterns inspired by indigenous art album.',
    category: 'AlbumCoverArt',
  },
  {
    name: 'Japanese',
    imageUrl: 'japaneseart.jpg',
    description: 'Traditional Japanese motifs with bold colors and flowing designs.',
    category: 'Traditional',
  },
  {
    name: 'Minimalist',
    imageUrl: 'minimalistart.jpg',
    description: 'Simple, clean lines and minimalist designs that focus on essential elements.',
    category: 'Modern',
  },
  {
    name: 'Anime',
    imageUrl: 'animeart.jpg',
    description: 'Modern take on anime style with more detail and color options.',
    category: 'Anime',
  },
  {
    name: 'Cosmos',
    imageUrl: 'cosmosart.jpg',
    description: 'Soft, colorful designs that mimic cosmos painting techniques.',
    category: 'Cosmos',
  },
  {
    name: 'Realistic',
    imageUrl: 'realismart.jpg',
    description: 'Highly detailed designs that look like photographs or realistic drawings.',
    category: 'Artistic',
  },
  {
    name: 'Creepy',
    imageUrl: 'creepyart.jpg',
    description: 'Crazy and luxurious designs inspired by the Creepy movement.',
    category: 'Creepy',
  },
  {
    name: 'Cyberpunk',
    imageUrl: 'cyberpunkart.jpg',
    description: 'Mechanical and organic designs that blend with human anatomy.',
    category: 'Modern',
  },
  {
    name: 'Floral',
    imageUrl: 'floralart.jpg',
    description: 'Abstract designs inspired by the Floral art movement.',
    category: 'Artistic',
  },
  {
    name: 'Hot',
    imageUrl: 'hotart.jpg',
    description: 'Whimsical designs inspired by Disney characters and stories.',
    category: 'Illustrative',
  },
  {
    name: 'Hyper Realistic',
    imageUrl: 'hyperrealisticart.jpg',
    description: 'Emotional and intense designs with distorted forms.',
    category: 'Artistic',
  },
  {
    name: 'Fantasy',
    imageUrl: 'fantasyart.jpg',
    description: 'Magical and mythical designs from fantasy worlds.',
    category: 'Illustrative',
  },
  {
    name: 'Illustration',
    imageUrl: 'illustrationart.jpg',
    description: 'Urban street art inspired designs with bold colors.',
    category: 'Illustrative',
  },
  {
    name: 'Pop Art',
    imageUrl: 'popart.jpg',
    description: 'Bold, colorful designs inspired by pop art movement with comic book style elements.',
    category: 'Modern',
  },
  {
    name: 'K-Pop',
    imageUrl: 'kpopart.jpg',
    description: 'Vintage-inspired designs from various decades.',
    category: 'Classic',
  },
  {
    name: 'Sci-fi',
    imageUrl: 'scifiart.jpg',
    description: 'Victorian-era mechanical and industrial designs.',
    category: 'Fantasy',
  },
  {
    name: 'Surrealism',
    imageUrl: 'surrealismart.jpg',
    description: 'Dreamlike and bizarre designs that defy reality.',
    category: 'Artistic',
  },
  {
    name: 'Vapor Wave',
    imageUrl: 'vaporwaveart.jpg',
    description: 'Abstract designs combining realism with chaotic elements.',
    category: 'Modern',
  },
  {
    name: 'Vintage',
    imageUrl: 'vintageart.jpg',
    description: 'Vintage designs combining realism with chaotic elements.',
    category: 'Modern',
  },
  {
    name: 'Wild Life',
    imageUrl: 'wildlifeart.jpg',
    description: 'Wild designs combining realism with chaotic elements.',
    category: 'Modern',
  }
];

const seedArtStyles = async () => {
  try {
    console.log('Dövme stillerini yükleme başladı...');
    
    for (const style of artStyles) {
      await artStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm dövme stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Dövme stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedArtStyles; 
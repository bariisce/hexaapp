import { signatureStylesService } from '../services/firebase';

const signatureStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic signature designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Classic',
    imageUrl: 'classicsign.jpg',
    description: 'Classic lines, bright colors, and classic American signature motifs.',
    category: 'Classic',
  },
  {
    name: 'Continuous Flow',
    imageUrl: 'continuousflowsign.jpg',
    description: 'Bold black patterns inspired by indigenous signature flow.',
    category: 'Continuous Flow',
  },
  {
    name: 'Dynamic Stroke',
    imageUrl: 'dynamicstrokesign.jpg',
    description: 'Dynamic stroke motifs with bold colors and flowing designs.',
    category: 'Dynamic',
  },
  {
    name: 'Elegant',
    imageUrl: 'elegantsign.png',
    description: 'Simple, clean lines and elegant designs that focus on essential elements.',
    category: 'Elegant',
  },
  {
    name: 'Flourish',
    imageUrl: 'flourishsign.png',
    description: 'Flourish take on traditional style with more detail and color options.',
    category: 'Flourish',
  },
  {
    name: 'Minimalist',
    imageUrl: 'minimalistsign.jpg',
    description: 'Soft, colorful designs that mimic minimal painting techniques.',
    category: 'Minmentist',
  },
  {
    name: 'Modern',
    imageUrl: 'modernsign.jpg',
    description: 'Highly detailed designs that look like photographs or modern drawings.',
    category: 'Modern',
  },
  {
    name: 'Monogram',
    imageUrl: 'monogramsign.jpg',
    description: 'Monogram designs inspired by the modern movement.',
    category: 'Monogram',
  },
  {
    name: 'Underline',
    imageUrl: 'underlinesign.jpg',
    description: 'Underline designs that blend with human anatomy.',
    category: 'Underline',
  },
  
];

const seedSignatureStyles = async () => {
  try {
    console.log('İmza stillerini yükleme başladı...');
    
    for (const style of signatureStyles) {
      await signatureStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm imza stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('imza stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedSignatureStyles; 
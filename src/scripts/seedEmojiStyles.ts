import { emojiStylesService } from '../services/firebase';

const emojiStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic art designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Abstract',
    imageUrl: 'abstract.png',
    description: 'Bold lines, bright colors, and classic abstract emojis.',
    category: 'Abstract',
  },
  {
    name: 'Animal',
    imageUrl: 'animal.jpg',
    description: 'Bold black patterns inspired by indigenous animal emoji.',
    category: 'Animal',
  },
  {
    name: 'Flag',
    imageUrl: 'flag.jpg',
    description: 'Amazing flag emojis with bold colors and flowing designs.',
    category: 'Cultural',
  },
  {
    name: 'Human',
    imageUrl: 'human.jpg',
    description: 'Simple, clean lines and human emoji designs that focus on essential elements.',
    category: 'Human',
  },
  {
    name: 'Object',
    imageUrl: 'object.jpg',
    description: 'Modern take on object emoji style with more detail and color options.',
    category: 'Object',
  },
  {
    name: 'Symbol',
    imageUrl: 'symbol.jpg',
    description: 'Soft, colorful designs that mimic symbol emoji painting techniques.',
    category: 'Symbol',
  }
];

const seedEmojiStyles = async () => {
  try {
    console.log('Emoji stillerini yükleme başladı...');
    
    for (const style of emojiStyles) {
      await emojiStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm Emoji stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Emoji stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedEmojiStyles; 
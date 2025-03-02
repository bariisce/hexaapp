import { roomStylesService } from '../services/firebase';

const roomStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic art designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Bathroom',
    imageUrl: 'bathroom.jpg',
    description: 'Bold lines, bright colors, and classic American bathroom motifs.',
    category: 'Abstract',
  },
  {
    name: 'Bedroom',
    imageUrl: 'bedroom.jpg',
    description: 'Bold black patterns inspired by indigenous Bedroom album.',
    category: 'Bedroom',
  },
  {
    name: 'Coffee Shop',
    imageUrl: 'coffeeshop.jpg',
    description: 'Traditional Coffe Shop motifs with bold colors and flowing designs.',
    category: 'Traditional',
  },
  {
    name: 'Dining Room',
    imageUrl: 'diningroom.jpg',
    description: 'Simple, clean lines and dining room designs that focus on essential elements.',
    category: 'Modern',
  },
  {
    name: 'Dressing Room',
    imageUrl: 'dressingroom.jpg',
    description: 'Modern take on dressing room style with more detail and color options.',
    category: 'dressingroom',
  },
  {
    name: 'garden',
    imageUrl: 'garden.jpg',
    description: 'Soft, colorful designs that mimic garden painting techniques.',
    category: 'garden',
  },
  {
    name: 'gym',
    imageUrl: 'gym.jpg',
    description: 'Highly detailed designs that look like photographs or realistic drawings.',
    category: 'gym',
  },
  {
    name: 'Home Office',
    imageUrl: 'homeoffice.jpg',
    description: 'Crazy and luxurious designs inspired by the home office movement.',
    category: 'homeoffice',
  },
  {
    name: 'Kitchen',
    imageUrl: 'kitchen.jpg',
    description: 'Mechanical and organic designs that blend with kitchen.',
    category: 'Modern',
  },
  {
    name: 'Living Room',
    imageUrl: 'livingroom.jpg',
    description: 'Abstract designs inspired by the living room movement.',
    category: 'Artistic',
  },
  {
    name: 'Office',
    imageUrl: 'office.jpg',
    description: 'Whimsical designs inspired by office and stores.',
    category: 'Illustrative',
  },
  {
    name: 'Pool',
    imageUrl: 'pool.jpg',
    description: 'Emotional and intense designs with distorted forms.',
    category: 'Artistic',
  },
  {
    name: 'Restaurant',
    imageUrl: 'restaurant.jpg',
    description: 'Magical and mythical designs from restaurant worlds.',
    category: 'Illustrative',
  },
  {
    name: 'Study Room',
    imageUrl: 'studyroom.jpg',
    description: 'study room inspired designs with bold colors.',
    category: 'Illustrative',
  },
  {
    name: 'Toilet',
    imageUrl: 'toilet.jpg',
    description: 'Bold, colorful designs inspired by toilet with comic book style elements.',
    category: 'Modern',
  }
];

const seedRoomStyles = async () => {
  try {
    console.log('Oda stillerini yükleme başladı...');
    
    for (const style of roomStyles) {
      await roomStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm Oda stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Oda stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedRoomStyles; 
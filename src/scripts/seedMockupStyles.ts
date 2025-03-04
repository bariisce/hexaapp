import { mockupStylesService } from '../services/firebase';

const mockupStyles = [
  {
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Basic art designs without any specific style.',
    category: 'Basic',
  },
  {
    name: 'Arm',
    imageUrl: 'arm.png',
    description: 'Bold lines, bright colors, and classic arm mockups.',
    category: 'Arm',
  },
  {
    name: 'Back',
    imageUrl: 'back.jpg',
    description: 'Bold black patterns inspired by indigenous back mockup.',
    category: 'Back',
  },
  {
    name: 'Beach',
    imageUrl: 'beach.jpg',
    description: 'Amazing beach mockups with bold colors and flowing designs.',
    category: 'Beach',
  },
  {
    name: 'Beauty',
    imageUrl: 'beauty.jpg',
    description: 'Simple, clean lines and beauty mockup designs that focus on essential elements.',
    category: 'Beauty',
  },
  {
    name: 'Business',
    imageUrl: 'business.jpg',
    description: 'Modern take on business mockup style with more detail and color options.',
    category: 'Business',
  },
  {
    name: 'Ethnic',
    imageUrl: 'ethnic.jpg',
    description: 'Soft, colorful designs that mimic ethnic mockup painting techniques.',
    category: 'Ethnic',
  },
  {
    name: 'Event',
    imageUrl: 'event.jpg',
    description: 'Soft, colorful designs that mimic event mockup painting techniques.',
    category: 'Event',
  },
  {
    name: 'Food',
    imageUrl: 'food.png',
    description: 'Soft, colorful designs that mimic food mockup painting techniques.',
    category: 'Food',
  },
  {
    name: 'Forearm',
    imageUrl: 'forearm.jpg',
    description: 'Soft, colorful designs that mimic forearm mockup painting techniques.',
    category: 'Forearm',
  },
  {
    name: 'Gaming',
    imageUrl: 'gaming.png',
    description: 'Soft, colorful designs that mimic gaming mockup painting techniques.',
    category: 'Gaming',
  },
  {
    name: 'Gym',
    imageUrl: 'gym.jpg',
    description: 'Soft, colorful designs that mimic gym mockup painting techniques.',
    category: 'Gym',
  },
  {
    name: 'Leg',
    imageUrl: 'leg.png',
    description: 'Soft, colorful designs that mimic leg mockup painting techniques.',
    category: 'Leg',
  },
  {
    name: 'Lifestyle',
    imageUrl: 'lifestyle.jpg',
    description: 'Soft, colorful designs that mimic lifestyle mockup painting techniques.',
    category: 'Lifestyle',
  },
  {
    name: 'Neck',
    imageUrl: 'neck.jpg',
    description: 'Soft, colorful designs that mimic neck mockup painting techniques.',
    category: 'Neck',
  },
  {
    name: 'Office',
    imageUrl: 'office.jpg',
    description: 'Soft, colorful designs that mimic office mockup painting techniques.',
    category: 'Office',
  },
  {
    name: 'Outdoor',
    imageUrl: 'outdoor.png',
    description: 'Soft, colorful designs that mimic outdoor mockup painting techniques.',
    category: 'Outdoor',
  },
  {
    name: 'Print',
    imageUrl: 'print.jpg',
    description: 'Soft, colorful designs that mimic print mockup painting techniques.',
    category: 'Print',
  },
  {
    name: 'Retail',
    imageUrl: 'retail.jpg',
    description: 'Soft, colorful designs that mimic retail mockup painting techniques.',
    category: 'Retail',
  },
  {
    name: 'Shoulder',
    imageUrl: 'shoulder.jpg',
    description: 'Soft, colorful designs that mimic shoulder mockup painting techniques.',
    category: 'Shoulder',
  },
  {
    name: 'Sports',
    imageUrl: 'sports.jpg',
    description: 'Soft, colorful designs that mimic sports mockup painting techniques.',
    category: 'Sports',
  },
  {
    name: 'Street Style',
    imageUrl: 'streetstyle.jpg',
    description: 'Soft, colorful designs that mimic street style mockup painting techniques.',
    category: 'Street Style',
  },{
    name: 'Studio',
    imageUrl: 'studio.jpg',
    description: 'Soft, colorful designs that mimic studio mockup painting techniques.',
    category: 'Studio',
  },{
    name: 'Tech',
    imageUrl: 'tech.jpg',
    description: 'Soft, colorful designs that mimic tech mockup painting techniques.',
    category: 'Tech',
  },
];

const seedMockupStyles = async () => {
  try {
    console.log('Mockup stillerini yükleme başladı...');
    
    for (const style of mockupStyles) {
      await mockupStylesService.addStyle(style);
      console.log(`${style.name} stili başarıyla eklendi.`);
    }
    
    console.log('Tüm Mockup stilleri başarıyla yüklendi!');
  } catch (error) {
    console.error('Mockup stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedMockupStyles; 
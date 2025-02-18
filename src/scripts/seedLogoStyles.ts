import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query } from 'firebase/firestore';

interface LogoStyle {
  name: string;
  imageUrl: string;
  description?: string;
  category?: string;
}

const LOGO_STYLES_DATA: LogoStyle[] = [
  { 
    name: 'No Style',
    imageUrl: 'nostyle.jpg',
    description: 'Professional no style logo design',
    category: 'standard'
  },
  { 
    name: 'Monogram',
    imageUrl: 'monogram.jpg',
    description: 'Professional monogram style logo design',
    category: 'standard'
  },
  { 
    name: 'Gaming',
    imageUrl: 'gaming.png',
    description: 'Professional gaming style logo design',
    category: 'standard'
  },
  { 
    name: 'Mascot',
    imageUrl: 'mascot.png',
    description: 'Professional mascot style logo design',
    category: 'standard'
  },
  { 
    name: 'Vintage',
    imageUrl: 'vintage.png',
    description: 'Professional vintage style logo design',
    category: 'standard'
  },
  { 
    name: 'Modern',
    imageUrl: 'modern.png',
    description: 'Professional modern style logo design',
    category: 'standard'
  },
  { 
    name: 'Abstract',
    imageUrl: 'abstract.jpg',
    description: 'Professional abstract style logo design',
    category: 'standard'
  },
  { 
    name: 'Geometric',
    imageUrl: 'geometric.jpg',
    description: 'Professional geometric style logo design',
    category: 'standard'
  },
  { 
    name: 'Luxury',
    imageUrl: 'luxury.jpg',
    description: 'Professional luxury style logo design',
    category: 'standard'
  },
  { 
    name: 'Sketch',
    imageUrl: 'sketch.png',
    description: 'Professional sketch style logo design',
    category: 'standard'
  },
  { 
    name: 'Illustration',
    imageUrl: 'illustration.jpg',
    description: 'Professional illustration style logo design',
    category: 'standard'
  },
  { 
    name: 'Symbolic',
    imageUrl: 'symbolic.png',
    description: 'Professional symbolic style logo design',
    category: 'standard'
  },
  { 
    name: 'Minimalist',
    imageUrl: 'minimalist.png',
    description: 'Professional minimalist style logo design',
    category: 'standard'
  },
  { 
    name: 'Cartoon',
    imageUrl: 'cartoon.jpg',
    description: 'Professional cartoon style logo design',
    category: 'standard'
  },
  { 
    name: 'Classic',
    imageUrl: 'classic.png',
    description: 'Professional classic style logo design',
    category: 'standard'
  },
  { 
    name: 'Futuristic',
    imageUrl: 'futuristic.jpg',
    description: 'Professional futuristic style logo design',
    category: 'standard'
  },
  { 
    name: 'Grunge',
    imageUrl: 'grunge.jpg',
    description: 'Professional grunge style logo design',
    category: 'standard'
  }
];

const seedLogoStyles = async () => {
  try {
    console.log('Logo stillerini Firestore\'a yükleme işlemi başlıyor...');
    
    // Önce mevcut stilleri kontrol et
    const logoStylesRef = collection(db, 'logoStyles');
    const querySnapshot = await getDocs(query(logoStylesRef));
    
    if (!querySnapshot.empty) {
      console.log('Logo stilleri zaten yüklenmiş, yeni yükleme yapılmayacak.');
      return;
    }

    // Yeni stilleri yükle
    for (const style of LOGO_STYLES_DATA) {
      const docRef = await addDoc(logoStylesRef, {
        ...style,
        createdAt: new Date()
      });
      console.log(`${style.name} başarıyla yüklendi (ID: ${docRef.id})`);
    }

    console.log('Tüm logo stilleri başarıyla Firestore\'a yüklendi!');
  } catch (error) {
    console.error('Logo stillerini yüklerken hata:', error);
    throw error;
  }
};

export default seedLogoStyles; 
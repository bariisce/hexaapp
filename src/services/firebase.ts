import { db } from '../config/firebase';
import { collection, addDoc, getDocs, doc, updateDoc } from 'firebase/firestore';

// Interfaces
export interface LogoRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'graphic' | 'text';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

export interface LogoStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

// Dövme İstekleri için Interface
export interface TattooRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Dövme Stilleri için Interface
export interface TattooStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

// İmza İstekleri için Interface
export interface SignatureRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// İmza Stilleri için Interface
export interface SignatureStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface ArtRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Art Stilleri için Interface
export interface ArtStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface RoomRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Oda Stilleri için Interface
export interface RoomStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface WallpaperRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Wallpaper Stilleri için Interface
export interface WallpaperStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface GarmentRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Giysi Stilleri için Interface
export interface GarmentStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface EmojiRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Emoji Stilleri için Interface
export interface EmojiStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

// Mockup Stilleri için Interface
export interface MockupStyle {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  category: string;
}

export interface MockupRequest {
  id?: string;
  prompt: string;
  selectedStyle: string;
  type: 'text' | 'image';
  status: 'pending' | 'completed';
  createdAt: number;
  result?: string;
}

// Logo Stilleri İşlemleri
export const logoStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<LogoStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'logoStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as LogoStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<LogoStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'logoStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Logo İstekleri İşlemleri
export const logoRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<LogoRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'logoRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'logoRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<LogoRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'logoRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as LogoRequest[];
  },
};

// Dövme Stilleri İşlemleri
export const tattooStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<TattooStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'tattooStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as TattooStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<TattooStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'tattooStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Dövme İstekleri İşlemleri
export const tattooRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<TattooRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'tattooRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'tattooRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<TattooRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'tattooRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as TattooRequest[];
  },
};

// İmza Stilleri İşlemleri
export const signatureStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<SignatureStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'signatureStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as SignatureStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<SignatureStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'signatureStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// İmza İstekleri İşlemleri
export const signatureRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<SignatureRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'signatureRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'signatureRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<SignatureRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'signatureRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as SignatureRequest[];
  },
};

// Art Stilleri İşlemleri
export const artStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<ArtStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'artStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as ArtStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<ArtStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'artStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Art İstekleri İşlemleri
export const artRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<ArtRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'artRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'artRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<ArtRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'artRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as ArtRequest[];
  },
};

// Oda Stilleri İşlemleri
export const roomStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<RoomStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'roomStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as RoomStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<RoomStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'roomStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Oda İstekleri İşlemleri
export const roomRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<RoomRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'roomRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'roomRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<RoomRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'roomRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as RoomRequest[];
  },
};

// Wallpaper Stilleri İşlemleri
export const wallpaperStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<WallpaperStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'wallpaperStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as WallpaperStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<WallpaperStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'wallpaperStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Wallpaper İstekleri İşlemleri
export const wallpaperRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<WallpaperRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'wallpaperRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'wallpaperRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<WallpaperRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'wallpaperRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as WallpaperRequest[];
  },
};

// Garment Stilleri İşlemleri
export const garmentStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<GarmentStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'garmentStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as GarmentStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<GarmentStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'garmentStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// garment İstekleri İşlemleri
export const garmentRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<GarmentRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'garmentRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'garmentRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<GarmentRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'garmentRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as GarmentRequest[];
  },
};

// Emoji Stilleri İşlemleri
export const emojiStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<EmojiStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'emojiStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as EmojiStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<EmojiStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'emojiStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Emoji İstekleri İşlemleri
export const emojiRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<EmojiRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'emojiRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'emojiRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<EmojiRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'emojiRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as EmojiRequest[];
  },
};

export const mockupStylesService = {
  // Tüm stilleri getir
  getAllStyles: async (): Promise<MockupStyle[]> => {
    const querySnapshot = await getDocs(collection(db, 'mockupStyles'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as MockupStyle));
  },

  // Yeni stil ekle
  addStyle: async (style: Omit<MockupStyle, 'id'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'mockupStyles'), {
      ...style,
      createdAt: new Date()
    });
    return docRef.id;
  },
};

// Mockup İstekleri İşlemleri
export const mockupRequestsService = {
  // Yeni istek oluştur
  createRequest: async (request: Omit<MockupRequest, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const docRef = await addDoc(collection(db, 'mockupRequests'), {
      ...request,
      status: 'pending',
      createdAt: Date.now()
    });
    return docRef.id;
  },

  // İstek durumunu güncelle
  updateRequestStatus: async (requestId: string, status: 'completed', result: string) => {
    const requestRef = doc(db, 'mockupRequests', requestId);
    await updateDoc(requestRef, {
      status,
      result,
      updatedAt: Date.now()
    });
  },

  // Kullanıcının isteklerini getir
  getUserRequests: async (): Promise<MockupRequest[]> => {
    const querySnapshot = await getDocs(collection(db, 'mockupRequests'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as MockupRequest[];
  },
};
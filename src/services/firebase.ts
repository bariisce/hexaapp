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
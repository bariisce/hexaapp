import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC5TGmijwhzhMX2_zoliQ4J36WUqPnd2FI",
  authDomain: "hexaapp-7d45b.firebaseapp.com",
  projectId: "hexaapp-7d45b",
  storageBucket: "hexaapp-7d45b.appspot.com",
  messagingSenderId: "833327854252",
  appId: "1:833327854252:web:c735a01b8dde41e3722509",
  measurementId: "G-07GCPEQ08F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
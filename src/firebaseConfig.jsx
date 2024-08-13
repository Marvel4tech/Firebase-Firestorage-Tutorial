import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBFFia9hxoCUMp6fbxgwZ3HF2ygW_YEQCM",
  authDomain: "fir-storage-tutorial-6a871.firebaseapp.com",
  projectId: "fir-storage-tutorial-6a871",
  storageBucket: "fir-storage-tutorial-6a871.appspot.com",
  messagingSenderId: "619585490149",
  appId: "1:619585490149:web:d46ac79a200e2c34c4d80c"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from  'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD4HQGKbl8Npsje_CZdrWfjoxYVHByzud4",
  authDomain: "tiktok---ebac-9cfe8.firebaseapp.com",
  projectId: "tiktok---ebac-9cfe8",
  storageBucket: "tiktok---ebac-9cfe8.appspot.com",
  messagingSenderId: "553135639935",
  appId: "1:553135639935:web:da86de3aa6e4991c529e4a"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
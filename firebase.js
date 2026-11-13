
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.11.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/12.11.0/firebase-firestore.js";

// GANTI DENGAN KONFIGURASI FIREBASE MILIKMU
const firebaseConfig = {
  apiKey: "AIzaSyCZxwSvktDogpnZGDBvKBczk5kCFuqqr1Y",
  authDomain: "fabianus-4e6a2.firebaseapp.com",
  projectId: "fabianus-4e6a2",
  storageBucket: "fabianus-4e6a2.firebasestorage.app",
  messagingSenderId: "61126542062",
  appId: "1:61126542062:web:c085a677c9881dbc93e9ff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  limit,
  onSnapshot
};

// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 🔥 Configuración real de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDEkRoD8pPzZuq_T5JlW99rR0ylEaStVYM",
  authDomain: "rededucativa-d3f13.firebaseapp.com",
  projectId: "rededucativa-d3f13",
  storageBucket: "rededucativa-d3f13.firebasestorage.app",
  messagingSenderId: "1021585269657",
  appId: "1:1021585269657:web:422c1c8d60f189f9f9e908",
  measurementId: "G-G1ZKZVNMZD"
};

// Inicializar Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import {  getStorage,
    ref,
    uploadBytes,
    getDownloadURL, } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";
  import {   getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
   } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  import { getFirestore,
    doc,
    setDoc,
    getDoc,
    getDocs,
    collection,
    addDoc,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
    deleteDoc } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDf0N6yOMQLtUDR-x_lyS9UrZYgrI5l_L4",
    authDomain: "apnablog-9d88a.firebaseapp.com",
    projectId: "apnablog-9d88a",
    storageBucket: "apnablog-9d88a.appspot.com",
    messagingSenderId: "253120523747",
    appId: "1:253120523747:web:210faccc7b3fe0fdf0c4d6",
    measurementId: "G-GKSP1NDWBP"
  };

  // Initilize

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);
  export {
    auth,
    db,
    getStorage,
    storage,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    doc,
    setDoc,
    ref,
    uploadBytes,
    getDownloadURL,
    signOut,
    getDoc,
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    arrayUnion,
    arrayRemove,
    query,
    where,
    deleteDoc
  }
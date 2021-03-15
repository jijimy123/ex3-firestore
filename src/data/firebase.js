import fbAppli from "firebase/app";
import "firebase/firestore";

/******* Ex#3 - Étape B ********************************/
// Ajouter votre objet de configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDulzFMxrTidZmWbVkUZIOZ6JNyMZAbB2g",
  authDomain: "ex3-produits-65dbd.firebaseapp.com",
  projectId: "ex3-produits-65dbd",
  storageBucket: "ex3-produits-65dbd.appspot.com",
  messagingSenderId: "1076197723207",
  appId: "1:1076197723207:web:7c4abc56fc6c317d80f562",
  measurementId: "G-GYGJ9RZWKR",
};

// Initialiser Firebase
if (!fbAppli.apps.length) {
  fbAppli.initializeApp(firebaseConfig);
}

// Initialiser Firestore
const bd = fbAppli.firestore();
/******* Ex#3 - Étape C ********************************/
// Exporter (par défaut) la référence à "bd" pour pouvoir l'utiliser dans le composant ListeProduits
export default bd;

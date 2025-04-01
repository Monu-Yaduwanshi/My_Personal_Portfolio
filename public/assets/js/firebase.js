import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpNkgsy00R2kBEWklmdMIBvAaTMyOvxWc",
  authDomain: "monuyaduwanshiportfolio.firebaseapp.com",
  projectId: "monuyaduwanshiportfolio",
  storageBucket: "monuyaduwanshiportfolio.firebasestorage.app",
  messagingSenderId: "1045268439989",
  appId: "1:1045268439989:web:32fdfd88deb5337709affc",
  measurementId: "G-L37MCEVBL6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




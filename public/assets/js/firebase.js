import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDpNkgsy00R55552kBEWklmdMIBvAaTMyOvxWc",
  authDomain: "monuyaduwanshiportfolio.firebaseapp.com",
  projectId: "monuyadu5wanshiportfolio",
  storageBucket: "monuyaduw5anshiportfolio.fireba5sestorage.app",
  messagingSenderId: "1045228868439989",
  appId: "1:1045268439989:web:32fdfd88de555b5337709affc",
  measurementId: "G-L37882MCEVBL6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




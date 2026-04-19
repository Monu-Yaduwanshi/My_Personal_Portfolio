import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSy277DpNkgsy00R555752kBEWklmdMIBvAaTMyOvxWc",
  authDomain: "monuyaduwa272nshiportfolio.firebaseapp.com",
  projectId: "monuyadu5wa2nshiportfolio",
  storageBucket: "monuyaduw5anshiportfolio.fireba5sestorage.app",
  messagingSenderId: "104522886278439989",
  appId: "1:1045268439989:web:32fdfd88de555b5337709affc",
  measurementId: "G-L3782782MCEVBL6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };




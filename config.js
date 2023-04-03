import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDUstNHVlRcZvNXMWz9LhxtSybCWZjil-w",
  authDomain: "demoproject-e671b.firebaseapp.com",
  databaseURL: "https://demoproject-e671b-default-rtdb.firebaseio.com",
  projectId: "demoproject-e671b",
  storageBucket: "demoproject-e671b.appspot.com",
  messagingSenderId: "306823463527",
  appId: "1:306823463527:web:f60b4662ab783906844ac2",
  measurementId: "G-BFL3B3NZVW"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCSYxRicJNdoAKZRonfiUntaRzNeHDUjRg",
//   authDomain: "foodiemoodie-7b4f1.firebaseapp.com",
//   projectId: "foodiemoodie-7b4f1",
//   storageBucket: "foodiemoodie-7b4f1.appspot.com",
//   messagingSenderId: "1089101844876",
//   appId: "1:1089101844876:web:73987ffe6dcded85eb46a9",
//   measurementId: "G-1403MSY888",
//   databaseURL: "https://foodiemoodie-7b4f1-default-rtdb.firebaseio.com"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {db , app, auth};
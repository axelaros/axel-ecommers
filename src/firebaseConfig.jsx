
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRdpScQyZLho4iKosGWgjwQuv6lovVeAA",
  authDomain: "axel-ecommers.firebaseapp.com",
  projectId: "axel-ecommers",
  storageBucket: "axel-ecommers.appspot.com",
  messagingSenderId: "891212952608",
  appId: "1:891212952608:web:316de59b65a995088a7845"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
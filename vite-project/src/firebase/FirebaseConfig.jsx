
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhggGLWSSQ3gtnhP9Bt_yfoken2UtyBi4",
  authDomain: "amanecom-8c6b3.firebaseapp.com",
  projectId: "amanecom-8c6b3",
  storageBucket: "amanecom-8c6b3.firebasestorage.app",
  messagingSenderId: "412372729205",
  appId: "1:412372729205:web:063968dcc7d04d2b6fe73c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
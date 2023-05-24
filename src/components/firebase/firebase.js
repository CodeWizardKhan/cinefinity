import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsaXmkBDr-WYJbx0-hxjpA0zgpthDJalU",
  authDomain: "cinefinity-8912d.firebaseapp.com",
  projectId: "cinefinity-8912d",
  storageBucket: "cinefinity-8912d.appspot.com",
  messagingSenderId: "444892773683",
  appId: "1:444892773683:web:8637860ca762686de25246",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;

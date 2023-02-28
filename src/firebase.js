// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDcfxgjNLVmHm_Dc2PTnBCIfGUVRoj-0eM",
  authDomain: "clone-linkedin-e99b1.firebaseapp.com",
  projectId: "clone-linkedin-e99b1",
  storageBucket: "clone-linkedin-e99b1.appspot.com",
  messagingSenderId: "957441415943",
  appId: "1:957441415943:web:417e405b87d0a9d49543a2"
};

  const firebaseapp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseapp);

  console.log(db);

  export { db }
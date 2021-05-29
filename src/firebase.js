
import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0L5wjjD0pM9YUjQteTTaU-ap24aAiZuQ",
    authDomain: "udemy-fcddc.firebaseapp.com",
    projectId: "udemy-fcddc",
    storageBucket: "udemy-fcddc.appspot.com",
    messagingSenderId: "553091268436",
    appId: "1:553091268436:web:e7739faeb51a26bfb812c1"
  };

 const firebaseApp= firebase.initializeApp(firebaseConfig);
 const db= firebaseApp.firestore();
 const auth=firebase.auth();

 export{db,auth};
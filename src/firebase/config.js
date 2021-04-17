import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCseUt2FCn5sn2luPM4LP-IZYL_K0KMeCE",
    authDomain: "firegram-dae56.firebaseapp.com",
    projectId: "firegram-dae56",
    storageBucket: "firegram-dae56.appspot.com",
    messagingSenderId: "1070689324835",
    appId: "1:1070689324835:web:172f061a4dbd3648204696"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };
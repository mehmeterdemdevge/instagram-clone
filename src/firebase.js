import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBwNnvWXe55-_glNUzvKcP9Joiu4hbG0-M",
    authDomain: "instagram-clone-5a1da.firebaseapp.com",
    databaseURL: "https://instagram-clone-5a1da.firebaseio.com",
    projectId: "instagram-clone-5a1da",
    storageBucket: "instagram-clone-5a1da.appspot.com",
    messagingSenderId: "105607050141",
    appId: "1:105607050141:web:33214edfb02efb79d6b574",
    measurementId: "G-N2X1R85J2E"
  };

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyBwNnvWXe55-_glNUzvKcP9Joiu4hbG0-M",
    authDomain: "instagram-clone-5a1da.firebaseapp.com",
    databaseURL: "https://instagram-clone-5a1da.firebaseio.com",
    projectId: "instagram-clone-5a1da",
    storageBucket: "instagram-clone-5a1da.appspot.com",
    messagingSenderId: "105607050141",
    appId: "1:105607050141:web:33214edfb02efb79d6b574",
    measurementId: "G-N2X1R85J2E"
  });

  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage= firebase.storage();

  export {db,auth,storage}
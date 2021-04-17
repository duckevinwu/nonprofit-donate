import firebase from 'firebase/app';
import "firebase/auth";

let firebaseConfig;
if (process.env.NODE_ENV === 'production') {
  firebaseConfig = {
    apiKey: "AIzaSyCP118XkSE9qCklORcjwRJxbOFzbbDXUbE",
    authDomain: "benefact-prod.firebaseapp.com",
    projectId: "benefact-prod",
    storageBucket: "benefact-prod.appspot.com",
    messagingSenderId: "258954312248",
    appId: "1:258954312248:web:5b66382720f2a523ff04cd"
  };
} else {
  firebaseConfig = {
    apiKey: "AIzaSyCGWW5jwYpz5Cj1kBUKr1RWtgD3Hke1J30",
    authDomain: "benefact-dev.firebaseapp.com",
    projectId: "benefact-dev",
    storageBucket: "benefact-dev.appspot.com",
    messagingSenderId: "845711035916",
    appId: "1:845711035916:web:26008a58483e27531f6829"
  };
}

firebase.initializeApp(firebaseConfig);
export default firebase;

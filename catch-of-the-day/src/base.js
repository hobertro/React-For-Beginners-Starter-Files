import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBxxGjA8mb7ETwA8rwxJ5G52DKfuleSEMU",
  authDomain: "catch-of-the-day-bho.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-bho.firebaseio.com"
  // projectId: "catch-of-the-day-bho",
  // storageBucket: "catch-of-the-day-bho.appspot.com",
  // messagingSenderId: "959531039066",
  // appId: "1:959531039066:web:57b220477d76252a139b63"
})

const base = Rebase.createClass(firebaseApp.database());
 
// This is a named export
export { firebaseApp };

// this is a default export
export default base;
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBy6Z5YpYFJ7cn4UrURIt7DfojG5H7bc7s",
  authDomain: "digi-sell.firebaseapp.com",
  projectId: "digi-sell",
  storageBucket: "digi-sell.appspot.com",
  messagingSenderId: "370138128406",
  appId: "1:370138128406:web:dc3d3d5364dbb40f2b9537",
  measurementId: "G-YK4F7BVTXH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
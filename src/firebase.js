 import firebase from 'firebase/app'
 import 'firebase/analytics'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA19YL7uaY1ZDtMeHUVoaSBe7kZZJfXB8c",
    authDomain: "fir-1e675.firebaseapp.com",
    projectId: "fir-1e675",
    storageBucket: "fir-1e675.appspot.com",
    messagingSenderId: "535891565604",
    appId: "1:535891565604:web:44fd765bd493431a188cb1",
    measurementId: "G-J3DNMKQ5TH"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = fb.firestore();
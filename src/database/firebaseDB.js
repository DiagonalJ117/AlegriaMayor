import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// Optionally import the services that you want to use
// import "firebase/auth";
//import "firebase/database";
// import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
   apiKey: 'AIzaSyDsQ6j0Xju-vlCf6dCTf0irNNfYlr2bfFc',
    authDomain: 'domingo-proyecto.firebaseapp.com',
    databaseURL: 'https://domingo-proyecto-default-rtdb.firebaseio.com',
    projectId: 'domingo-proyecto',
    storageBucket: 'domingo-proyecto.appspot.com',
    messagingSenderId: '427660329342',
    appId: '1:427660329342:web:12c2d0998b46870546f32f',
    measurementId: 'G-40JKYELLMC',
  };

if (!firebase.apps.length) {
    try {
        firebase.initializeApp(firebaseConfig);
    } catch (err) {
        console.error('firebase initialization error raised', err.stack);
    }
}
export default firebase;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBXt3x1uHd7zw2a8lRm9pxAkkpFmOuRXjc",
    authDomain: "laraapp-c5a2c.firebaseapp.com",
    databaseURL: "https://laraapp-c5a2c.firebaseio.com",
    projectId: "laraapp-c5a2c",
    storageBucket: "laraapp-c5a2c.appspot.com",
    messagingSenderId: "874978210922",
    appId: "1:874978210922:web:102a204604ba943b574613",
    measurementId: "G-WZ6XX4TJHG"
  };

   const firebaseApp = firebase.initializeApp(firebaseConfig);
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();

   export {auth, provider};
   export default db;

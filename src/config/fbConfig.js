import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDI-065EAJwMJCB3xGMY_vDJSC6Pwtfq38",
    authDomain: "syltech-project-manager.firebaseapp.com",
    databaseURL: "https://syltech-project-manager.firebaseio.com",
    projectId: "syltech-project-manager",
    storageBucket: "syltech-project-manager.appspot.com",
    messagingSenderId: "293214345917",
    appId: "1:293214345917:web:01ffe37b82dbdc3a0cb5d4",
    measurementId: "G-X2EZBW9H0K"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //bfirebase.analytics();
  firebase.firestore().settings({timestampsInSnapshots: true } )

  export default firebaseConfig

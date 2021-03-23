import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyAmJDC0-at43WqOJqerBAA9QGuB9w8aQRI",
        authDomain: "facebook-messenger-clone-5d558.firebaseapp.com",
        projectId: "facebook-messenger-clone-5d558",
        storageBucket: "facebook-messenger-clone-5d558.appspot.com",
        messagingSenderId: "936936623842",
        appId: "1:936936623842:web:285e4567e812fda5bb18bb"
      
});

const db = firebaseApp.firestore();

export default db;
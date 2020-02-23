import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyDkac0lliICndTIEllLHfBFoYE1JqpLLJs",
    authDomain: "notereact-90c29.firebaseapp.com",
    databaseURL: "https://notereact-90c29.firebaseio.com",
    projectId: "notereact-90c29",
    storageBucket: "notereact-90c29.appspot.com",
    messagingSenderId: "521251957196",
  };

  firebase.initializeApp(firebaseConfig);

  export const noteData = firebase.database().ref('dataNote/');
         
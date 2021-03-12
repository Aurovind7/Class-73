import * as firebase from "firebase";
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyB_WyAeR8Cf4EthFIdb8ZLzcXStcEVOONE",
    authDomain: "wily-app--wireless-library.firebaseapp.com",
    databaseURL:"https://wily-app--wireless-library.firebaseio.com",
    projectId: "wily-app--wireless-library",
    storageBucket: "wily-app--wireless-library.appspot.com",
    messagingSenderId: "1097767295924",
    appId: "1:1097767295924:web:e6df7de6b4162a7ab330e1"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvon5BBiMDjnR_Y0qB053VaSlX99ql6TY",
  authDomain: "apptestedb.firebaseapp.com",
  databaseURL: "https://apptestedb.firebaseio.com",
  projectId: "apptestedb",
  storageBucket: "apptestedb.appspot.com",
  messagingSenderId: "61531276055",
  appId: "1:61531276055:web:d6e3ee46af8bd5de83ed52",
};

export const db  = firebase.initializeApp(firebaseConfig);

const firestore = db.firestore();

export default firestore;

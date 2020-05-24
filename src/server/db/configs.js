const firebase = require('firebase');

var config = {
  apiKey: "AIzaSyAvon5BBiMDjnR_Y0qB053VaSlX99ql6TY",
  authDomain: "apptestedb.firebaseapp.com",
  databaseURL: "https://apptestedb.firebaseio.com",
  projectId: "apptestedb",
  storageBucket: "apptestedb.appspot.com",
  messagingSenderId: "61531276055",
  appId: "1:61531276055:web:d3e249aa7af5c70383ed52"
};

const server = firebase.initializeApp(config);

module.exports = (server);
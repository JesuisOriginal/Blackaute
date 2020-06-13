import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './tcptest.css';
import firebase from 'firebase';
import Form from '../components/Form';
// import dgram from 'dgram';

var firebaseConfig = {
	apiKey: "AIzaSyAvon5BBiMDjnR_Y0qB053VaSlX99ql6TY",
	authDomain: "apptestedb.firebaseapp.com",
	databaseURL: "https://apptestedb.firebaseio.com",
	projectId: "apptestedb",
	storageBucket: "apptestedb.appspot.com",
	messagingSenderId: "61531276055",
	appId: "1:61531276055:web:d6e3ee46af8bd5de83ed52"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const collectionRef = firestore.collection('tcp-messaging');
const logo = "public/logo512.png";

// var s = dgram.createSocket('udp4');
// s.bind(1234, function() {
//   s.addMembership('224.0.0.114');
// });
// dgram.createSocket('udp4');


// var net = require('net');

// var server = net.createServer(function(socket) {
// 	socket.write('Echo server\r\n');
// 	socket.pipe(socket);
// });

// server.listen(1337, '127.0.0.1');

class Tcptest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: null,
      }
    }
    componentDidMount() {
      firebase.auth().onAuthStateChanged(user => {
        this.setState({ user });
      });
    }
    handleSignIn() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
    handleLogOut() {
      firebase.auth().signOut();
    }
    render() {
      return (
        <div className="app">
          <div className="app__header">
            <img src={logo} className="app__logo" alt="logo" />
            <h2>
              SIMPLE APP WITH REACT
            </h2>
            { !this.state.user ? (
              <button
                className="app__button"
                onClick={this.handleSignIn.bind(this)}
              >
                Sign in
              </button>
            ) : (
              <button
                className="app__button"
                onClick={this.handleLogOut.bind(this)}
              >
                Logout
              </button>
            )}
          </div>
          <div className="app__list">
          <Form user={this.state.user} />
          </div>
        </div>
      );
    }
  }
  export default Tcptest;

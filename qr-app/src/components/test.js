import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import firebase from 'firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

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

const collectionRef = firestore.collection('barrelTitor');

export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){

    this.setState({
      result: data,
    })
    if (data) {
      // console.log(">Scanned "+data);
      console.log(">typeof data: "+ typeof(data));
      addGeoLocatedBarrel(data);
    }

  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

function makeid(length) {
	var result           = '';
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
	   result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
 }

var docName;
function update(position) {

	var newDoc = firestore.collection("barrelTitor").doc("QR"+docName);
	console.log("new doc of name: " ,docName);
		newDoc.set({
			// codigoBarril: docName,
			// remetente: "Hououin Kyouma",
			// destinatario: "M4",
			// tipo: "Pilsen",
			location: new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
		}).then(function(){
			console.log("Barrel Added, check Firebase Console...");
		}).catch(function(error){
			 console.log("Error, whos hunting you: ", error);
    });

}

function addGeoLocatedBarrel(jsonString) {
  if (navigator.geolocation) {
  docName = makeid(4);
  navigator.geolocation.getCurrentPosition(update);

  var name = "QR"+docName;
  console.log(">Name : " + docName);
  console.log(">jsonString "+ jsonString);
  jsonString = jsonString.replace("'", "");
  jsonString = jsonString.replace("'", "");
  console.log(">replaced "+ jsonString);

  var barrel = JSON.parse(jsonString);
  console.log(">Parsed from QR: " + barrel );
  setTimeout(delayedUpdate, 1500, barrel, name);
  
  // var updatingDoc = firestore.collection("barrelTitor").doc(name);
  // updatingDoc.update(barrel);

  } else {
  console.log(">Geolocation is not supported by this browser.");
  }
  
}

function delayedUpdate(barrel, name) {
  var updatingDoc = firestore.collection("barrelTitor").doc(name);
  updatingDoc.update(barrel);
  console.log('>updated '+name);
}

// function handleQuerry() {
//   let history = useHistory();
//   return (
//     <button onClick={
//       () => {
//         history.push('/');
//       }
//     }>

//     </button>
//   );
// }
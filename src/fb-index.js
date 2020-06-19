
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
const barrelData = document.querySelector("#BarrelData");
const barrelSent = document.querySelector("#barrelSent");	
const barrelBtn = document.getElementById("barrelBtn");

var lat;
var long;

document.getElementById("barrelBtn").addEventListener("click",  function() {
	
	getLocation();
	// console.log(coord.toString());

})

function update(position) {
	var docName = makeid(4);
	var newDoc = firestore.collection("barrelTitor").doc("locatedBarre"+docName);
	console.log("new doc of name: " ,docName);
	barrelData.innerHTML = "Status: <br>	sent<br>ID:"
		+ docName + "<br>content: \"Beware of the Company, IBM watches\""
		+"<br>location:<br>		Latitute: "+ position.coords.latitude+
		"<br>		Longitute: " + position.coords.longitude;
		newDoc.set({
			codigoBarril: +docName,
			remetente: "Hououin Kyouma",
			destinatario: "M4",
			tipo: "Pilsen",
			location: new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
		}).then(function(){
			console.log("Barrel Added, check Firebase Console...");
		}).catch(function(error){
			 console.log("Error, whos hunting you: ", error);
		});
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

 function getLocation() {
   if (navigator.geolocation) {
	 navigator.geolocation.getCurrentPosition(update);
   } else {
	//  x.innerHTML = "Geolocation is not supported by this browser.";
   }
   
 }

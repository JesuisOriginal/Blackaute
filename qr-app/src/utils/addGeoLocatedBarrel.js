import makeid from './makeid';
import delayedUpdate from './delayedUpdate';
import {update} from '../services/db/queries/barrels';

export default function addGeoLocatedBarrel(jsonString) {
  if (navigator.geolocation) {
    const docName = makeid(4);
    navigator.geolocation.getCurrentPosition(update);

    var name = "QR" + docName;
    console.log(">Name : " + docName);
    console.log(">jsonString " + jsonString);
    jsonString = jsonString.replace("'", "");
    jsonString = jsonString.replace("'", "");
    console.log(">replaced " + jsonString);

    var barrel = JSON.parse(jsonString);
    console.log(">Parsed from QR: " + barrel);
    setTimeout(delayedUpdate, 1500, barrel, name);

    // var updatingDoc = firestore.collection("barrelTitor").doc(name);
    // updatingDoc.update(barrel);
  } else {
    console.log(">Geolocation is not supported by this browser.");
  }
}

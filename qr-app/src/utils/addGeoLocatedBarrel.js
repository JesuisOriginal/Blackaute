import makeid from './makeid';
import delayedUpdate from './delayedUpdate';
import {update} from '../services/db/queries/barrels';

export default function addGeoLocatedBarrel(docName) {
  if (navigator.geolocation) {
    // const docName = makeid(4);
    
    const updateDoc = (position) => update(position, docName);

    navigator.geolocation.getCurrentPosition(updateDoc);


    // var updatingDoc = firestore.collection("barrelTitor").doc(name);
    // updatingDoc.update(barrel);
  } else {
    console.log(">Geolocation is not supported by this browser.");
  }
}

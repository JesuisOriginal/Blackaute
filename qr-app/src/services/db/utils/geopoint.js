import firebase from 'firebase';

export const generate = ({coords}) => (
    {lat: coords.latitude, long: coords.longitude}
)

// new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
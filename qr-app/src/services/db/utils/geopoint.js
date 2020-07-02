import firebase from 'firebase';

export const generate = ({coords}) => (
    new firebase.firestore.GeoPoint(coords.latitude, coords.longitude)
)

// new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
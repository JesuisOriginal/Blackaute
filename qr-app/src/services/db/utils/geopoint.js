import firestore from '../config';

export const create = ({latitude,longitude}) => (
    new firestore.GeoPoint(latitude, longitude)
)

// new firebase.firestore.GeoPoint(position.coords.latitude, position.coords.longitude)
const firebase = require('./configs');

const db = firebase.firestore();

const content = db.collection('content');

module.exports = ({ content });
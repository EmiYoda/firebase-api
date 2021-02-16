const functions = require("firebase-functions");
const express = require('express');
const { default: firebase } = require("firebase");
const admin = require('firebase-admin')

const app = express();
admin.initializeApp({
    credentials: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://photodb-api.firebaseio.com'
})

app.get('/hello-world', (req, res) => {
    return res.status(200).json({message: 'Hello world'})
});

app.use(require('./routes/products.routes'))

exports.app = functions.https.onRequest(app);

const functions = require('firebase-functions');
const express= require('express');
const app= express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
 exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello World");
 });

 app.get('/', function (req, res) {
    res.send('Mi primer proyecto en Firebase')
  })
exports.app=functions.https.onRequest(app);
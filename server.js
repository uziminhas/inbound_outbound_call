const express = require('express');
const voiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

//allows you to call this number and run this script
app.post('/voice',(req,res) => {
  const twiml = new voiceResponse();
  twiml.say('Hello everybody');

  res.type('text/xml');
  res.send(twiml.toString());

});

app.listen(1337);

//using Ngrok, will create an accessible URL using local host
//use URL for demoing a local page

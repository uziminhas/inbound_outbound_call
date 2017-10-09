var accountSid = ''; //input Twilio account SID
var authToken = ''; //input Twilio account authorizatioon token

//allows you to make any HTTP request through the API
var client = require('twilio')(accountSid,authToken);


client.calls.create({
  url: 'https://handler.twilio.com/twiml/EHbd93d20c209ac6733bf15dd80b541720',
  to: '+', //test personal number
  from: '+' //test Twilio free number



}, function(err, call){
  if(err){
    console.log(err);
  }
  else{
    console.log(call.sid);
  }


});

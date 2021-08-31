const {accountSid, authToken, twilioNumber, write_key_voice } = require('./credentials');
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

// Voice
client.calls
  .create({
    statusCallback: write_key_voice, // Segment Source Function Webhook
    statusCallbackEvent: ['initiated', "completed"],
    from:twilioNumber,
    to:'+15623389588',     
    url: 'http://demo.twilio.com/docs/voice.xml' // Voice recording demo url
  })
  .then(call => console.log(call.sid));
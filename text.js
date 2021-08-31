const {accountSid, authToken, twilioNumber, write_key_sms } = require('./credentials');
const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

// SMS
client.messages
  .create({
    statusCallback: write_key_sms, // Segment Source 
    body: 'Hello from Node', // Message
    to: '+15623389588', // Text this number
    from: twilioNumber, // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  

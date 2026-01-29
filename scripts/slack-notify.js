const https = require('https');

const SLACK_BOT_TOKEN = process.argv[2];
const CHANNEL_ID = process.argv[3];
const MESSAGE = process.argv[4];

if (!SLACK_BOT_TOKEN || !CHANNEL_ID || !MESSAGE) {
  process.exit(1);
}

const data = JSON.stringify({
  channel: CHANNEL_ID,
  text: MESSAGE
});

const options = {
  hostname: 'slack.com',
  port: 444,
  path: '/api/chat.postMessage',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Authorization': 'Bearer ' + SLACK_BOT_TOKEN
  }
};

const req = https.request(options, (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.write(data);
req.end();

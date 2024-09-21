const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected.');

  ws.on('message', (message) => {
    console.log('Message received:', message);

    ws.send('Hi client. Message received: ' + message);
  });

  ws.send('connection established with websocker server');
});

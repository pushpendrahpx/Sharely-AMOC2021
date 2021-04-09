const express = require('express');
const { ExpressPeerServer } = require('peer');

const app = express();

// app.get('/', (req, res, next) => res.send('Hello world!')
// =======
const PORT = process.env.PORT || 9000;

const server = app.listen(PORT,()=>{
  console.log(`Server Started at : ${PORT}`);
});

const peerServer = ExpressPeerServer(server, {
  path: '/myapp'
});
app.use('/', express.static('public'))
app.use('/peerjs', peerServer);

// // == OR ==

// const http = require('http');

// const server = http.createServer(app);
// const peerServer = ExpressPeerServer(server, {
//   debug: true,
//   path: '/myapp'
// });

// app.use('/peerjs', peerServer);

// server.listen(9000);

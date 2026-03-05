const io = require('socket.io')(process.env.PORT || 3000, {
  cors: { origin: "*" }
});

io.on('connection', (socket) => {
  console.log('Device Connected');
  socket.on('voice-signal', (data) => {
    socket.broadcast.emit('receive-voice', data);
  });
}); 

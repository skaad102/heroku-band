var socket = io();

socket.on("connect", () => {
  console.log("Cliente conectado server");
});

socket.on("disconnect", () => {
  console.log("Cliente desconct 😒");
});

// socket.emit('mesaje' ,{
//     title : 'ping'
// })

// socket.on('pong', data => console.log(data))
/* socket.on('saludo', data => console.log(data)) */

socket.on('list-bands', (bands) => {
    console.table(bands);
});

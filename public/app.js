var socket = io();

socket.on('connect', () =>{
    console.log('Cliente conectado server');
})

socket.on('disconnect', () =>{
    console.log('Cliente desconc 😒');
})

socket.emit('mesaje' ,{
    title : 'ping'
})

socket.on('pong', data => console.log(data))
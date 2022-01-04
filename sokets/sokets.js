const {io} = require('../index')
io.on("connection", (cliente) => {
    console.log("conectado");
    cliente.on("disconnect", () => {
      console.log("desconectado");
    });
  
    cliente.on('mesaje', (data) =>{
      console.log(data);
  
      io.emit('pong', {title: 'pong'})
    })
  });
const { io } = require("../index");
io.on("connection", (cliente) => {
  console.log("conectado");
  cliente.on("disconnect", () => {
    console.log("desconectado");
  });

  // cliente.on("mesaje", (data) => {
  //   console.log(data);

  //   io.emit("pong", { title: "pong" });
  // });

  // resivir mensaje de dart
  cliente.on("difundir", (data) => {
    // io.emit('nuevo-mensaje',data) a toditos

    cliente.broadcast.emit("nuevo-mensaje", data);
  });

  cliente.on("saludo", (data) => {
    /* consola server */
    // console.log(data);
    // io.emit("saludo",  data );
    cliente.broadcast.emit("saludo",  data );
  });
});

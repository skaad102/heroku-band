const { io } = require("../index");
const Band = require("../models/band");
const Bands = require("../models/utilsBands");

const bands = new Bands();

bands.addBand(new Band("maná"));
bands.addBand(new Band("Blink"));
bands.addBand(new Band("Soda Estere"));
bands.addBand(new Band("ExtremoDuro"));

io.on("connection", (cliente) => {
  /* console.table(bands.getBands()) */

  console.log("conectado");
  cliente.on("disconnect", () => {
    console.log("desconectado");
  });

  cliente.emit("list-bands", bands.getBands());

  // cliente.on("mesaje", (data) => {
  //   console.log(data);

  //   io.emit("pong", { title: "pong" });
  // });

  // resivir mensaje de dart
  cliente.on("difundir", (data) => {
    // io.emit('nuevo-mensaje',data) a toditos

    cliente.broadcast.emit("nuevo-mensaje", data);
  });

  cliente.on("voto-banda", (id) => {
    bands.upBand(id);
    io.emit("list-bands", bands.getBands());
  });

  cliente.on("nueva-banda", (nombreBanda)=>{
    bands.addBand(new Band(nombreBanda))
    io.emit("list-bands", bands.getBands());
  })

  cliente.on("del-banda", (idBanda)=>{
    bands.delBand(idBanda)
    io.emit("list-bands", bands.getBands());
  })
});

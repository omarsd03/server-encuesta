const mongoose = require("mongoose");
const URI = "mongodb://localhost/mean-encuesta";
// const URI = "mongodb://omarsd:zmur300@ds043487.mlab.com:43487/mean-encuesta";

mongoose
  .connect(URI)
  .then((db) => {
    console.log("Conexion a BD Establecida");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

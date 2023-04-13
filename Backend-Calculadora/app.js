const express = require("express");
const app = express();
const port = 4000;

app.get("/calc/:expressao", function (req, res) {
  var num = eval(req.params.expressao);
  var sum = num.toString();
  res.send(sum);
});

app.set({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
});

app.listen(port, (err) => {
  if (err) {
    console.log("Servidor Inativo");
  } else {
    console.log("Servidor Iniciado");
  }
});

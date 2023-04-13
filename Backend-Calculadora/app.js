const express = require("express");
const cors = require("cors");
const mariadb = require("mariadb");
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/calc/:expressao", function (req, res) {
  var num = eval(req.params.expressao);
  var sum = num.toString();
  console.log(sum);
  res.send(sum);
});

app.post("/user", function (req, res) {
  console.log(req.body);
  res.status(201).send(req.body);
});

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "calculadora",
});

async function main() {
  try {
    let conn = await pool.getConnection();
    let rows = await conn.query("INSERT INTO user (nome) VALUES ('Jean')");
    console.log("Dado Inserido no BD!");
  } catch (err) {
    console.log("Erro ao inserir Dado no BD");
  }
}

main();

app.listen(port, (err) => {
  if (err) {
    console.log("Servidor Inativo");
  } else {
    console.log("Servidor Iniciado");
  }
});

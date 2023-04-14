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
  res.send(sum);
});

app.get("/dadosbd", async function (req, res) {
  try {
    let conn = await pool.getConnection();
    let resBD = await conn.query("SELECT * FROM user");
    console.log("Dados buscados com Sucesso!");
    res.send(resBD);
  } catch (err) {
    console.log("Erro ao buscar dados!");
    res.send("Erro ao buscar dados!");
  }
});

app.post("/user", async function (req, res) {
  try {
    const { name, tempo, contas } = req.body;
    const { data, hora } = tempo;
    await main(name, data, hora, contas);
    res.status(201).send(req.body);
  } catch (err) {
    res.send("Os dados digitados estão incorretos");
  }
});

const pool = mariadb.createPool({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "calculadora",
});

async function main(name, data, hora, arrContas) {
  try {
    let conn = await pool.getConnection();
    if (name) {
      await conn.query(
        `INSERT INTO user (nome, data, hora, contas) VALUES ('${name}', '${data}', '${hora}', '${arrContas}')`
      );
      console.log("Dado Inserido no BD!");
    }
  } catch (err) {
    console.log("Erro ao inserir Dado no BD");
  }
}

app.listen(port, (err) => {
  if (err) {
    console.log("Servidor Inativo");
  } else {
    console.log("Servidor Iniciado");
  }
});

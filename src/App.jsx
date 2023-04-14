import { useState } from "react";
import Screen from "./Screen/Screen";
import { Container, LoginStyle, CalculatorStyle } from "./styles";
import Input from "./Input/Input";
import HistoricoContas from "./Historico/HistoricoContas";

function App() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [login, setLogin] = useState(true);
  const [historico, setHistorico] = useState(false);
  const [dataDB, setDataDB] = useState([]);
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setTime({
      data: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
    });
    setName(value);
    setLogin(false);
    setValue("");
  }

  async function returnData() {
    setError(false);
    try {
      const res = await fetch("http://localhost:4000/dadosbd");
      const json = await res.json();
      setDataDB(json);
    } catch (err) {
      setError(true);
      console.log("Erro ao conectar com o Banco de Dados");
    } finally {
      setHistorico(!historico);
    }
  }

  return (
    <Container>
      {login && (
        <>
          <LoginStyle>
            <h1>Digite seu nome:</h1>
            <form onSubmit={handleSubmit}>
              <Input
                label={"Nome"}
                name="nome"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <button type="submit">Entrar</button>
            </form>
          </LoginStyle>
          <button className="ButtonHistorico" onClick={returnData}>
            Histórico de Contas
          </button>
          {historico && <HistoricoContas dataDB={dataDB} error={error} />}
        </>
      )}

      {name.length > 0 && (
        <Screen
          name={name}
          tempo={time}
          setName={setName}
          setLogin={setLogin}
          setHistorico={setHistorico}
        />
      )}
    </Container>
  );
}

export default App;

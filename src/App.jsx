import { useState } from "react";
import Screen from "./Screen/Screen";
import { Container, LoginStyle, CalculatorStyle, LogoutStyle } from "./styles";
import Input from "./Input/Input";

function App() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [login, setLogin] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setName(value);
    setLogin(false);
    setValue("");
  }

  function Logout() {
    setName("");
    setLogin(true);
  }

  return (
    <Container>
      {login && (
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
      )}

      {name.length > 0 && (
        <>
          <LogoutStyle>
            <p>{name && ` Seja bem vindo(a) ${name}.`}</p>
            <button onClick={Logout}>Sair</button>
          </LogoutStyle>
          <CalculatorStyle>
            <p>Calculadora</p>
            <div className="CalcContas">
              <Screen />
              <div className="Results">Contas</div>
            </div>
          </CalculatorStyle>
        </>
      )}
    </Container>
  );
}

export default App;

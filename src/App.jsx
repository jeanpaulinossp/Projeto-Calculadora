import { useState } from "react";
import Screen from "./Screen/Screen";
import { Container, LoginStyle, CalculatorStyle } from "./styles";
import Input from "./Input/Input";

function App() {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [login, setLogin] = useState(true);

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
          <CalculatorStyle>
            <p>Calculadora</p>
            <div className="CalcContas">
              <Screen
                name={name}
                hora={time}
                setName={setName}
                setLogin={setLogin}
              />
              <div className="Results">Contas</div>
            </div>
          </CalculatorStyle>
        </>
      )}
    </Container>
  );
}

export default App;

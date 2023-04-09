import { useState } from "react";
import Screen from "./Screen/Screen";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <h3>Calculadora Matemática Simples</h3>
      <Screen />
    </Container>
  );
}

export default App;

import React, { useState } from "react";
import { Container, Operations, Result } from "./styles";

const Screen = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const [acc, setAcc] = useState(0);
  const [operation, setOperation] = useState(false);

  function addDigitCalc(d) {
    if ((d === "+" || d === "-" || d === "*" || d === "/") && operation) {
      console.log("kkkk");
      setOperation(false);
      setValue(result + d);
      return;
    }
    if (operation) {
      setValue(d);
      setOperation(false);
      return;
    }

    const valueDigitScreen = value + d;
    setValue(valueDigitScreen);
  }

  function clearCalc() {
    setOperation(false);
    setValue("");
    setResult(0);
    setAcc(0);
    return;
  }

  return (
    <Container>
      <Operations>{value}</Operations>
      <Result>{result}</Result>
    </Container>
  );
};

export default Screen;

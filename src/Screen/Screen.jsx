import React, { useState } from "react";
import { Buttons, Container, Operations, Result } from "./styles";
import Button from "../Button/Button";

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

  function operationCalc(op) {
    if (op === "bs") {
      let valueScreen = value;
      valueScreen = valueScreen.substring(0, valueScreen.length - 1);
      setValue(valueScreen);
      setOperation(false);
      return;
    }
    try {
      // função eval do JS faz o cálculo da operação automaticamente
      const r = eval(value);
      setAcc(r);
      setResult(r);
      setOperation(true);
    } catch {
      setResult("ERRO");
    }
  }

  return (
    <Container>
      <Operations>{value}</Operations>
      <Result>{result}</Result>
      <Buttons>
        <Button onClick={clearCalc} label={"AC"} />
        <Button onClick={() => addDigitCalc("(")} label={"("} />
        <Button onClick={() => addDigitCalc(")")} label={")"} />
        <Button onClick={() => addDigitCalc("/")} label={"/"} />
        <Button onClick={() => addDigitCalc("7")} label={"7"} />
        <Button onClick={() => addDigitCalc("8")} label={"8"} />
        <Button onClick={() => addDigitCalc("9")} label={"9"} />
        <Button onClick={() => addDigitCalc("*")} label={"*"} />
        <Button onClick={() => addDigitCalc("4")} label={"4"} />
        <Button onClick={() => addDigitCalc("5")} label={"5"} />
        <Button onClick={() => addDigitCalc("6")} label={"6"} />
        <Button onClick={() => addDigitCalc("-")} label={"-"} />
        <Button onClick={() => addDigitCalc("1")} label={"1"} />
        <Button onClick={() => addDigitCalc("2")} label={"2"} />
        <Button onClick={() => addDigitCalc("3")} label={"3"} />
        <Button onClick={() => addDigitCalc("+")} label={"+"} />
        <Button onClick={() => addDigitCalc("0")} label={"0"} />
        <Button onClick={() => addDigitCalc(".")} label={"."} />
        <Button onClick={() => operationCalc("bs")} label={"BS"} />
        <Button onClick={() => operationCalc("=")} label={"="} />
      </Buttons>
    </Container>
  );
};

export default Screen;

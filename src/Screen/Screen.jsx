import React, { useEffect, useState } from "react";
import {
  Container,
  LogoutStyle,
  Buttons,
  Calc,
  Operations,
  Result,
} from "./styles";
import Button from "../Button/Button";
import { USER_POST } from "../api/config";

const Screen = ({ name, tempo, setName, setLogin, setHistorico }) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const [acc, setAcc] = useState(0);
  const [operation, setOperation] = useState(false);
  const [contas, setContas] = useState([]);

  function addDigitCalc(d) {
    if ((d === "+" || d === "-" || d === "*" || d === "/") && operation) {
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

  function addDigitCalcTeclado(d) {
    let tecla = d.key;
    let valueDigitScreen;

    if (
      (tecla >= 0 && tecla <= 9) ||
      tecla === "+" ||
      tecla === "-" ||
      tecla === "*" ||
      tecla === "/" ||
      tecla === "," ||
      tecla === "(" ||
      tecla === ")"
    ) {
      if (
        (tecla === "+" || tecla === "-" || tecla === "*" || tecla === "/") &&
        operation
      ) {
        setOperation(false);
        setValue(result + tecla);
        return;
      }
      if (operation) {
        setValue(tecla);
        setOperation(false);
        return;
      }
      valueDigitScreen = value + tecla;
      setValue(valueDigitScreen);
    }
    if (tecla === "Enter" || tecla === "=") {
      operationCalc("=");
    }
    if (tecla === "Backspace") {
      operationCalc("bs");
    }
    if (tecla === "Escape") {
      clearCalc();
    }
  }

  function clearCalc() {
    setOperation(false);
    setValue("");
    setResult(0);
    setAcc(0);
    return;
  }

  async function operationCalc(op) {
    if (op === "bs") {
      let valueScreen = value;
      valueScreen = valueScreen.substring(0, valueScreen.length - 1);
      setValue(valueScreen);
      setOperation(false);
      return;
    }
    try {
      // tratar a expressao enviada, quando tiver barra substituir por %2F
      const newValue = value.replace("/", "%2F").replace(",", ".");
      await requestApi(newValue);

      setOperation(true);
    } catch {
      setResult("ERRO");
    }
  }

  async function requestApi(expressao) {
    const res = await fetch(`http://localhost:4000/calc/${expressao}`);
    const text = await res.text();
    setAcc(text);
    setResult(text);
    const newExpressao = value.replace("%2F", "/").replace(".", ",");
    setContas((item) => [...item, ` ${newExpressao}=${text} `]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newData = {
      name,
      tempo,
      contas,
    };
    dataApi(newData);
    setName("");
    setLogin(true);
    setContas([]);
    setHistorico(false);
  }

  async function dataApi(data) {
    const { url, options } = USER_POST(data);
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  }

  useEffect(() => {
    document.addEventListener("keydown", addDigitCalcTeclado);

    return () => {
      document.removeEventListener("keydown", addDigitCalcTeclado);
    };
  }, [operation, value]);

  return (
    <Container>
      <LogoutStyle>
        <form onSubmit={handleSubmit}>
          <p>{name && ` Seja bem vindo(a) ${name}.`}</p>
          <button type="submit">Sair</button>
        </form>
      </LogoutStyle>
      <p className="nameCalc">Calculadora Matemática</p>
      <Calc>
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
          <Button onClick={() => addDigitCalc(",")} label={","} />
          <Button onClick={() => operationCalc("bs")} label={"BS"} />
          <Button onClick={() => operationCalc("=")} label={"="} />
        </Buttons>
      </Calc>
    </Container>
  );
};

export default Screen;
